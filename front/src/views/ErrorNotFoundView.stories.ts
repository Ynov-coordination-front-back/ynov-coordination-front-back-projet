import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import ErrorNotFoundView from './ErrorNotFoundView.vue'

const mockRouter = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div />' } },
    { path: '/404', component: ErrorNotFoundView },
  ],
})

export default {
  title: 'Views/ErrorNotFoundView',
  component: ErrorNotFoundView,
  tags: ['autodocs'],
  decorators: [
    () => ({
      components: { ErrorNotFoundView },
      setup() {
        mockRouter.push('/404')
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
  name: 'Page 404 — introuvable',
}
