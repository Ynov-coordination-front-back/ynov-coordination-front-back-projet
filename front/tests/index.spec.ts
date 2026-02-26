// e2e/home.spec.ts
import { test, expect } from '@playwright/test'

test('home page returns 200', async ({ request }) => {
  const response = await request.get('/')
  expect(response.status()).toBe(200)
})