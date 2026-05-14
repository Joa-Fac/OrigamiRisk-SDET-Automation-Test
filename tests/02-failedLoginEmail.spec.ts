import { test, expect } from '../fixtures';

/**
 * Test Case 02 - Login Fails with invalid username
 *
 * Accesses the login page and attempts to login using an invalid username
 * and valid password. After failing login, verifies the website shows
 * the error banner, then asserts that the website URL is that of the login page.
 */

test('Login fails with invalid username', async ({ page, pom }) => {
    const loginPage = pom.getLoginPage();

    await loginPage.navigate();
    await loginPage.login(
        'invaliduser',
        process.env.USER_PASSWORD!);

    await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
    await expect(page).toHaveURL(/\/login/);
});
