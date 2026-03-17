import { randomUUID } from "crypto";
import { CreateTodoDto, Todo, UpdateTodoDto } from "../types/todo.types";

// In-memory storage (sera remplacé par une BDD plus tard)
let todos: Todo[] = [];

export const todoService = {
  reset(): void {
    todos = [];
  },

  getAll(): Todo[] {
    return todos;
  },

  getById(id: string): Todo | undefined {
    return todos.find((todo) => todo.id === id);
  },

  create(dto: CreateTodoDto): Todo {
    const now = new Date();
    const todo: Todo = {
      id: randomUUID(),
      title: dto.title,
      description: dto.description,
      completed: false,
      createdAt: now,
      updatedAt: now,
    };
    todos.push(todo);
    return todo;
  },

  update(id: string, dto: UpdateTodoDto): Todo | undefined {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) return undefined;

    const existing = todos[index]!;
    const updated: Todo = {
      ...existing,
      ...dto,
      updatedAt: new Date(),
    };
    todos[index] = updated;
    return updated;
  },

  delete(id: string): boolean {
    const length = todos.length;
    todos = todos.filter((todo) => todo.id !== id);
    return todos.length < length;
  },
};
