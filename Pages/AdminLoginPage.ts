import { type Locator, type Page } from '@playwright/test';

export class AdminLoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly homePageIdentifier: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#btnsubmit');
    this.homePageIdentifier = page.locator('#ewPageCaption');
  }

  async navigateTo() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}