import { todoService } from "../services/todo.service";
import { describe, it, expect } from '@jest/globals'

describe("Todo Service", () => {
    // beforeEach(() => { // ! Isnt used since some tests need to test the state of the service after a create, update or delete operation
    //     todoService.clear();
    // })

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