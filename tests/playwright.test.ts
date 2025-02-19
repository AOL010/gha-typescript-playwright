import { test, expect } from '@playwright/test';

test('Check Playwright page title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);
});
