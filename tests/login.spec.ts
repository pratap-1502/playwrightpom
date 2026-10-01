import { test, expect } from '@playwright/test';
import { AdminLoginPage } from '../Pages/AdminLoginPage';

test('admin can log in', async ({ page }) => {
    const username = process.env.BASE_USER;
    const password = process.env.BASE_PASS;

    if (!username || !password) {
        throw new Error('BASE_USER and BASE_PASS must be set in .env');
    }

    const loginPage = new AdminLoginPage(page);

    await loginPage.navigateTo();
    await loginPage.login(username, password);

    await expect(loginPage.homePageIdentifier).toBeVisible();
});