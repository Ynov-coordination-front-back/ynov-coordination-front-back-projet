import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import ErrorServerView from './ErrorServerView.vue'

const mockRouter = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div />' } },
    { path: '/500', component: ErrorServerView },
  ],
})

export default {
  title: 'Views/ErrorServerView',
  component: ErrorServerView,
  tags: ['autodocs'],
  decorators: [
    () => ({
      components: { ErrorServerView },
      setup() {
        mockRouter.push('/500')
        return {}
      },
      template: '<story />',
      global: {
        plugins: [mockRouter, createPinia()],
      },
    }),
  ],
}

export const Default = {
  name: 'Page 500 — erreur serveur',
}
