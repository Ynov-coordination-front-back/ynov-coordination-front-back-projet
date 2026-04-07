import { Request, Response } from "express";
import { todoService } from "../services/todo.service";
import { BadRequestError, NotFoundError } from "../errors/httpErrors";

export const todoController = {
  async getAll(_req: Request, res: Response): Promise<void> {
    const todos = await todoService.getAll();
    res.json({ success: true, data: todos });
  },

  async getById(req: Request, res: Response): Promise<void> {
    const todo = await todoService.getById(req.params.id as string);
    if (!todo) {
      throw new NotFoundError("Todo not found");
      return;
    }
    res.json({ success: true, data: todo });
  },

  async create(req: Request, res: Response): Promise<void> {
    const { title, description } = req.body;
    if (!title) {
      throw new BadRequestError("Title is required");
    }
    const todo = await todoService.create({ title, description });
    res.status(201).json({ success: true, data: todo });
  },

  async update(req: Request, res: Response): Promise<void> {
    const todo = await todoService.update(req.params.id as string, req.body);
    if (!todo) {
      throw new NotFoundError("Todo not found");
    }
    res.json({ success: true, data: todo });
  },

  async delete(req: Request, res: Response): Promise<void> {
    const deleted = await todoService.delete(req.params.id as string);
    if (!deleted) {
      throw new NotFoundError("Todo not found");
    }
    res.status(204).send();
  },
};
