import { todoService } from "../services/todo.service";
import { describe, it, expect, beforeEach, beforeAll, afterAll } from "@jest/globals";
import sequelize from "../config/database";
import migrator from "../config/migrator";

beforeAll(async () => {
    await sequelize.authenticate();
    await migrator.up();
});

afterAll(async () => {
    await sequelize.close();
});

describe("Todo Service", () => {
    beforeEach(async () => {
        const { Todo } = await import("../models/todo.model");
        await Todo.destroy({ where: {} });
    });

    it("should create a todo", async () => {
        const todo = await todoService.create({ title: "Unit test" });

        expect(todo.id).toBeDefined();
        expect(todo.completed).toBe(false);
    });

    it("should return null for unknown id", async () => {
        const todo = await todoService.getById("fake-id");

        expect(todo).toBeNull();
    });
});