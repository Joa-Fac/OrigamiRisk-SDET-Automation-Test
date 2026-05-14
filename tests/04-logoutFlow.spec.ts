import { test, expect } from '../fixtures';

/**
 * Test Case 04 - Logout Flow
 *
 * Performs the happy path for login, then execute various tests to verify website
 * functionality around its logout feature including banner stating it has logged out,
 * and that it's not possible to access the "/secure" page after a successful logout.
 */

test.describe('Logout flow', () => {
  test.beforeEach(async ({ page, pom }) => {
    await pom.getLoginPage().navigate();
    await pom.getLoginPage().login(process.env.USER_USERNAME!, process.env.USER_PASSWORD!);
    await expect(page).toHaveURL(/\/secure/);
  });

  test('Logout redirects back to login page with success message', async ({ page, pom }) => {
    await pom.getSecurePage().logout();

    await expect(page).toHaveURL(/\/login/);
    await expect(pom.getLoginPage().flashMessage).toContainText('You logged out of the secure area!');
  });

  test('Session is invalidated after logout — direct access to /secure redirects to login', async ({ pom, page }) => {
    await pom.getSecurePage().logout();
    await pom.getSecurePage().navigate();

    await expect(page).toHaveURL(/\/login/);
    await expect(pom.getLoginPage().flashMessage).toContainText('You must login to view the secure area!');
  });
});
