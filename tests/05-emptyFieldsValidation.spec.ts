import { test, expect } from '../fixtures';

/**
 * Test Case 05 - Login Page Fields Validation
 *
 * Performs various field validations within the login page including variations of
 * empty fields, along with their respective assertions.
 */

test.describe('Empty field validation', () => {
  test.beforeEach(async ({ pom }) => {
    await pom.getLoginPage().navigate();
  });

  test('Empty username with valid password shows error', async ({ page, pom }) => {
    const loginPage = pom.getLoginPage();
    await loginPage.login('', process.env.USER_PASSWORD!);

    await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
    await expect(page).toHaveURL(/\/login/);
  });

  test('Valid username with empty password shows error', async ({ page, pom }) => {
    const loginPage = pom.getLoginPage();
    await loginPage.login(process.env.USER_USERNAME!, '');

    await expect(page).toHaveURL(/\/login/);
    await expect(loginPage.flashMessage).toContainText('Your password is invalid!');
  });

  test('Both fields empty shows error', async ({ page, pom }) => {
    const loginPage = pom.getLoginPage();
    await loginPage.login('', '');

    await expect(page).toHaveURL(/\/login/);
    await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
  });
});
