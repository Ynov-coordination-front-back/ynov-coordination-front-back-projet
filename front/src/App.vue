<template>
  <div class="app">
    <h1>Todo App</h1>

    <p v-if="error" class="error">{{ error }}</p>

    <form @submit.prevent="createTodo" class="form">
      <input v-model="newTitle" placeholder="Title" required />
      <input v-model="newDescription" placeholder="Description (optional)" />
      <button type="submit">Add</button>
    </form>

    <ul class="list">
      <li v-for="todo in todos" :key="todo.id" :class="{ done: todo.completed }">
        <template v-if="editingId === todo.id">
          <input v-model="editTitle" />
          <input v-model="editDescription" />
          <button @click="saveEdit(todo.id)">Save</button>
          <button @click="editingId = null">Cancel</button>
        </template>
        <template v-else>
          <input type="checkbox" :checked="todo.completed" @change="toggleCompleted(todo)" />
          <span class="title">{{ todo.title }}</span>
          <span class="desc">{{ todo.description }}</span>
          <button @click="startEdit(todo)">Edit</button>
          <button class="del" @click="deleteTodo(todo.id)">Delete</button>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const API = 'http://localhost:3000/todos'

interface Todo {
  id: string
  title: string
  description: string
  completed: boolean
  createdAt: string
  updatedAt: string
}

const todos = ref<Todo[]>([])
const error = ref('')
const newTitle = ref('')
const newDescription = ref('')
const editingId = ref<string | null>(null)
const editTitle = ref('')
const editDescription = ref('')

async function fetchTodos() {
  try {
    const res = await fetch(API)
    const json = await res.json()
    todos.value = json.data
  } catch {
    error.value = 'Failed to load todos'
  }
}

async function createTodo() {
  if (!newTitle.value.trim()) return
  await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: newTitle.value, description: newDescription.value }),
  })
  newTitle.value = ''
  newDescription.value = ''
  fetchTodos()
}

async function toggleCompleted(todo: Todo) {
  await fetch(`${API}/${todo.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: !todo.completed }),
  })
  fetchTodos()
}

function startEdit(todo: Todo) {
  editingId.value = todo.id
  editTitle.value = todo.title
  editDescription.value = todo.description
}

async function saveEdit(id: string) {
  await fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: editTitle.value, description: editDescription.value }),
  })
  editingId.value = null
  fetchTodos()
}

async function deleteTodo(id: string) {
  await fetch(`${API}/${id}`, { method: 'DELETE' })
  fetchTodos()
}

onMounted(fetchTodos)
</script>

<style scoped>
.app {
  max-width: 600px;
  margin: 2rem auto;
  font-family: sans-serif;
  padding: 0 1rem;
}

h1 {
  margin-bottom: 1.5rem;
}

.error {
  color: red;
}

.form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.form input {
  flex: 1;
  padding: 0.4rem 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 120px;
}

button {
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #4a90e2;
  color: white;
}

button.del {
  background: #e24a4a;
}

.list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  flex-wrap: wrap;
}

.list li.done .title {
  text-decoration: line-through;
  color: #999;
}

.title {
  font-weight: bold;
  flex: 1;
}

.desc {
  color: #666;
  font-size: 0.9rem;
  flex: 2;
}

.list li input:not([type="checkbox"]) {
  padding: 0.3rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
