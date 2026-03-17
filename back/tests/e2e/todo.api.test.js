const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');

const appModule = require('../../dist/index.js');
const { todoService } = require('../../dist/services/todo.service.js');

test.beforeEach(() => {
  todoService.reset();
});

test('GET /api/health returns API status', async () => {
  const response = await request(appModule.default).get('/api/health');

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.success, true);
});

test('POST then GET /api/todos works end-to-end', async () => {
  const createdResponse = await request(appModule.default)
    .post('/api/todos')
    .send({
      title: 'Tester le CRUD',
      description: 'Verifier la coherence front/back',
    });

  assert.equal(createdResponse.statusCode, 201);
  assert.equal(createdResponse.body.success, true);

  const listResponse = await request(appModule.default).get('/api/todos');

  assert.equal(listResponse.statusCode, 200);
  assert.equal(listResponse.body.data.length, 1);
  assert.equal(listResponse.body.data[0].title, 'Tester le CRUD');
});

test('POST /api/todos validates title presence', async () => {
  const response = await request(appModule.default)
    .post('/api/todos')
    .send({ description: 'Missing title' });

  assert.equal(response.statusCode, 400);
  assert.equal(response.body.success, false);
  assert.equal(response.body.error, 'Title is required');
});
