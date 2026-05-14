import { Page, Locator } from '@playwright/test';

export class SecurePage {
  readonly page: Page;
  readonly logoutButton: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutButton = page.locator('a[href="/logout"]');
    this.flashMessage = page.locator('#flash');
  }

  async navigate() {
    await this.page.goto('/secure');
  }

  async logout() {
    await this.logoutButton.click();
  }
}
