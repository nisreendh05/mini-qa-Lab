
import { test, expect } from '@playwright/test';

test('TC-01: เพิ่มงานใหม่สำเร็จ', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const todoInput = page.getByPlaceholder('What needs to be done?');

  await todoInput.fill('Read software testing notes');
  await todoInput.press('Enter');

  await expect(
    page.getByText('Read software testing notes', { exact: true })
  ).toBeVisible();
});

test('TC-02: ไม่เพิ่มงานว่าง', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const todoInput = page.getByPlaceholder('What needs to be done?');

  await todoInput.press('Enter');

  await expect(page.locator('.todo-list li')).toHaveCount(0);
});

test('TC-03: ทำเครื่องหมายงานเสร็จ', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const todoInput = page.getByPlaceholder('What needs to be done?');

  await todoInput.fill('Complete QA practice');
  await todoInput.press('Enter');

  const todoItem = page.locator('.todo-list li').filter({
    hasText: 'Complete QA practice'
  });

  await todoItem.locator('.toggle').check();

  await expect(todoItem).toHaveClass(/completed/);
});

test('TC-04: ลบรายการงานสำเร็จ', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const todoInput = page.getByPlaceholder('What needs to be done?');

  await todoInput.fill('Task to delete');
  await todoInput.press('Enter');

  const todoItem = page.locator('.todo-list li').filter({
    hasText: 'Task to delete'
  });

  await todoItem.hover();
  await todoItem.locator('.destroy').click();

  await expect(todoItem).toHaveCount(0);
});
