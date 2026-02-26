import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export const errorMiddleware = (
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    let error = err;

    if (!(error instanceof AppError)) {
        error = new AppError("Internal Server Error", 500);
    }

    const response = {
        success: false,
        error: {
            message: error.message,
            ...(process.env.NODE_ENV === "development" && {
                stack: err.stack,
            }),
        },
    };

    res.status(error.statusCode || 500).json(response);
};