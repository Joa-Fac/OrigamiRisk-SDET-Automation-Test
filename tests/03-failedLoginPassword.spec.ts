import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../pages/PageObjectManager';

/**
 * Test Case 03 - Login Fails with invalid password
 *
 * Accesses the login page and attempts to login using a valid username
 * and invalid password. After failing login, verifies the website shows
 * the error banner, then asserts that the website URL is that of the login page.
 */

test('Login fails with invalid password', async ({ page }) => {
    const pom = new PageObjectManager(page);
    const loginPage = pom.getLoginPage();

    await loginPage.navigate();
    await loginPage.login(
        process.env.USER_USERNAME!,
        'wrongpassword');

    await expect(loginPage.flashMessage).toContainText('Your password is invalid!');
    await expect(page).toHaveURL(/\/login/);
});
