import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../pages/PageObjectManager';

/**
 * Test Case 01 - Successful login with valid credentials
 *
 * Accesses the login page and attempts to login using a valid username
 * and password. After successful login, verifies the website shows
 * the "logged in" banner, then asserts that the website URL is that of the 'secure' page.
 */

test('Successful login with valid credentials', async ({ page }) => {
    const pom = new PageObjectManager(page);
    const loginPage = pom.getLoginPage();

    await loginPage.navigate();
    await loginPage.login(
        process.env.USER_USERNAME!,
        process.env.USER_PASSWORD!);

    await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
    await expect(page).toHaveURL(/\/secure/);
});
