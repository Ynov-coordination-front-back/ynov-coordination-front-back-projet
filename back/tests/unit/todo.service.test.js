const test = require('node:test');
const assert = require('node:assert/strict');

const { todoService } = require('../../dist/services/todo.service.js');

test.beforeEach(() => {
  todoService.reset();
});

test('todoService creates and returns a todo', () => {
  const todo = todoService.create({
    title: 'Documenter le projet',
    description: 'Ajouter un onboarding et une strategy error management',
  });

  assert.equal(todo.title, 'Documenter le projet');
  assert.equal(todo.completed, false);
  assert.equal(todoService.getAll().length, 1);
});

test('todoService updates an existing todo', () => {
  const todo = todoService.create({ title: 'Initial title' });
  const updated = todoService.update(todo.id, { title: 'Updated title', completed: true });

  assert.ok(updated);
  assert.equal(updated.title, 'Updated title');
  assert.equal(updated.completed, true);
});

test('todoService deletes an existing todo', () => {
  const todo = todoService.create({ title: 'Temporary todo' });
  const deleted = todoService.delete(todo.id);

  assert.equal(deleted, true);
  assert.equal(todoService.getAll().length, 0);
});
