export const logger = {
    error: (message: string, meta?: any) => {
        console.error("[ERROR]", message, meta || "");
    },
    info: (message: string) => {
        console.log("[INFO]", message);
    },
};