import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../pages/PageObjectManager';

test.describe('Logout flow', () => {
  let pom: PageObjectManager;

  test.beforeEach(async ({ page }) => {
    pom = new PageObjectManager(page);
    await pom.getLoginPage().navigate();
    await pom.getLoginPage().login(process.env.USER_USERNAME!, process.env.USER_PASSWORD!);
    
    await expect(page).toHaveURL(/\/secure/);
  });

  test('Logout redirects back to login page with success message', async ({ page }) => {
    await pom.getSecurePage().logout();

    await expect(page).toHaveURL(/\/login/);
    await expect(pom.getLoginPage().flashMessage).toContainText('You logged out of the secure area!');
  });

  test('Session is invalidated after logout — direct access to /secure redirects to login', async ({ page }) => {
    await pom.getSecurePage().logout();
    await pom.getSecurePage().navigate();

    await expect(page).toHaveURL(/\/login/);
    await expect(pom.getLoginPage().flashMessage).toContainText('You must login to view the secure area!');

  });
});
