import request from "supertest";
import { app } from "../app";
import { describe, it, expect, beforeEach} from '@jest/globals'
import { todoService } from "../services/todo.service";

describe("Todo API", () => {
    let createdId: string;

    beforeEach(() => {
        todoService.clear();
    })

    it("should create a todo", async () => {
        const res = await request(app)
            .post("/todos")
            .send({ title: "Test todo" });

        expect(res.status).toBe(201);
        expect(res.body.success).toBe(true);
        expect(res.body.data.title).toBe("Test todo");

        createdId = res.body.data.id;
    });

    it("should get all todos", async () => {
        const res = await request(app).get("/todos");

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(Array.isArray(res.body.data)).toBe(true);
    });

    it("should get todo by id", async () => {
        const res = await request(app).get(`/todos/${createdId}`);

        expect(res.status).toBe(200);
        expect(res.body.data.id).toBe(createdId);
    });

    it("should update todo", async () => {
        const res = await request(app)
            .put(`/todos/${createdId}`)
            .send({ completed: true });

        expect(res.status).toBe(200);
        expect(res.body.data.completed).toBe(true);
    });

    it("should delete todo", async () => {
        const res = await request(app).delete(`/todos/${createdId}`);

        expect(res.status).toBe(204);
    });

    it("should return 404 for unknown todo", async () => {
        const res = await request(app).get("/todos/unknown-id");

        expect(res.status).toBe(404);
    });
});