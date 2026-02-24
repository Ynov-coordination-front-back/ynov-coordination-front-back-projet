import { Request, Response } from "express";
import { todoService } from "../services/todo.service";

export const todoController = {
  getAll(_req: Request, res: Response): void {
    const todos = todoService.getAll();
    res.json({ success: true, data: todos });
  },

  getById(req: Request, res: Response): void {
    const todo = todoService.getById(req.params.id as string);
    if (!todo) {
      res.status(404).json({ success: false, error: "Todo not found" });
      return;
    }
    res.json({ success: true, data: todo });
  },

  create(req: Request, res: Response): void {
    const { title, description } = req.body;
    if (!title) {
      res.status(400).json({ success: false, error: "Title is required" });
      return;
    }
    const todo = todoService.create({ title, description });
    res.status(201).json({ success: true, data: todo });
  },

  update(req: Request, res: Response): void {
    const todo = todoService.update(req.params.id as string, req.body);
    if (!todo) {
      res.status(404).json({ success: false, error: "Todo not found" });
      return;
    }
    res.json({ success: true, data: todo });
  },

  delete(req: Request, res: Response): void {
    const deleted = todoService.delete(req.params.id as string);
    if (!deleted) {
      res.status(404).json({ success: false, error: "Todo not found" });
      return;
    }
    res.status(204).send();
  },
};
