import { Todo } from "../models/todo.model";

export interface CreateTodoDto {
  title: string;
  description?: string | null;
}

export interface UpdateTodoDto {
  title?: string;
  description?: string | null;
  completed?: boolean;
}

export const todoService = {
  async getAll(): Promise<Todo[]> {
    return Todo.findAll({ order: [["createdAt", "DESC"]] });
  },

  async getById(id: string): Promise<Todo | null> {
    return Todo.findByPk(id);
  },

  async create(dto: CreateTodoDto): Promise<Todo> {
    return Todo.create({
      title: dto.title,
      description: dto.description ?? null,
    });
  },

  async update(id: string, dto: UpdateTodoDto): Promise<Todo | null> {
    const todo = await Todo.findByPk(id);
    if (!todo) return null;
    return todo.update(dto);
  },

  async delete(id: string): Promise<boolean> {
    const deleted = await Todo.destroy({ where: { id } });
    return deleted > 0;
  },
};