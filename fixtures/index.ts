import { test as base } from '@playwright/test';
import { PageObjectManager } from '../pages/PageObjectManager';

type Fixtures = {
  pom: PageObjectManager;
};

export const test = base.extend<Fixtures>({
  pom: async ({ page }, use) => {
    await use(new PageObjectManager(page));
  },
});

export { expect } from '@playwright/test';
