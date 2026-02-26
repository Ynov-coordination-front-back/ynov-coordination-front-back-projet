import { todoService } from "../services/todo.service";
import { describe, it, expect, beforeEach } from '@jest/globals'

describe("Todo Service", () => {
    beforeEach(() => {
        todoService.clear();
    })

    it("should create a todo", () => {
        const todo = todoService.create({ title: "Unit test" });

        expect(todo.id).toBeDefined();
        expect(todo.completed).toBe(false);
    });

    it("should return undefined for unknown id", () => {
        const todo = todoService.getById("fake-id");

        expect(todo).toBeUndefined();
    });
});