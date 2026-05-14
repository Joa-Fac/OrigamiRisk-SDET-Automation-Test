import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../pages/PageObjectManager';

test.describe('Login page UI elements', () => {
  let pom: PageObjectManager;

  test.beforeEach(async ({ page }) => {
    pom = new PageObjectManager(page);
    await pom.getLoginPage().navigate();
  });

  test('Login button is visible and enabled on page load', async () => {
    const loginPage = pom.getLoginPage();

    await expect(loginPage.loginButton).toBeVisible();
    await expect(loginPage.loginButton).toBeEnabled();
  });

  test('Flash message is dismissed when close button is clicked', async () => {
    const loginPage = pom.getLoginPage();
    await loginPage.login('invaliduser', process.env.USER_PASSWORD!);
    await expect(loginPage.flashMessage).toBeVisible();

    await loginPage.flashMessage.locator('a.close').click();

    await expect(loginPage.flashMessage).not.toBeVisible();
  });
});
