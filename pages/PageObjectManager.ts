import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { SecurePage } from './SecurePage';

export class PageObjectManager {
  private readonly page: Page;
  private loginPage?: LoginPage;
  private securePage?: SecurePage;

  constructor(page: Page) {
    this.page = page;
  }

  getLoginPage(): LoginPage {
    if (!this.loginPage) this.loginPage = new LoginPage(this.page);
    return this.loginPage;
  }

  getSecurePage(): SecurePage {
    if (!this.securePage) this.securePage = new SecurePage(this.page);
    return this.securePage;
  }
}
