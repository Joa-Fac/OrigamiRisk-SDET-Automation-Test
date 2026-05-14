# OrigamiRisk SDET Automation Test

A Playwright-based end-to-end test suite built in TypeScript, covering the authentication flows of [The Internet](https://the-internet.herokuapp.com/login). Includes login, logout, access control, input validation, and UI element tests, structured using the Page Object Model (POM) pattern with a custom Playwright fixture for automatic page object injection.

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

---

## Setup

**1. Clone the repository**

```bash
git clone https://github.com/Joa-Fac/OrigamiRisk-SDET-Automation-Test.git
cd OrigamiRisk-SDET-Automation-Test
```

**2. Install dependencies**

```bash
npm install
```

**3. Install Playwright browsers**

```bash
npx playwright install
```

**4. Configure environment variables**

Copy the provided template and fill in the values:

```bash
cp .env.example .env
```

Open `.env` and set the following:

| Variable        | Description                             |
|-----------------|-----------------------------------------|
| `BASE_URL`      | Base URL of the application under test  |
| `USER_USERNAME` | Valid login username                    |
| `USER_PASSWORD` | Valid login password                    |

---

## Running the Tests

| Command               | Description                                      |
|-----------------------|--------------------------------------------------|
| `npm test`            | Run all tests headlessly across all browsers     |
| `npm run test:headed` | Run all tests with the browser visible           |
| `npm run test:ui`     | Open the Playwright UI mode for interactive runs |
| `npm run report`      | Open the HTML report from the last test run      |

To run a specific test file:

```bash
npx playwright test tests/01-successfulLogin.spec.ts
```

To run against a single browser:

```bash
npx playwright test --project=chromium
```

---

## Test Coverage

| File | Description |
|------|-------------|
| `01-successfulLogin.spec.ts` | Login with valid credentials — verifies redirect to secure area and success banner |
| `02-failedLoginEmail.spec.ts` | Login with invalid username — verifies error banner and user stays on login page |
| `03-failedLoginPassword.spec.ts` | Login with invalid password — verifies error banner and user stays on login page |
| `04-logoutFlow.spec.ts` | Logout redirects to login page; session is invalidated after logout |
| `05-emptyFieldsValidation.spec.ts` | Empty username, empty password, and both fields empty — each verifies appropriate error |
| `06-uiElements.spec.ts` | Login button visible and enabled on load; banner message dismissed on close |

---

## Project Structure

```
├── .github/
│   └── workflows/
│       └── playwright.yml        # CI/CD pipeline (GitHub Actions)
├── fixtures/
│   └── index.ts                  # Custom Playwright fixture — injects pom into every test
├── pages/
│   ├── LoginPage.ts              # POM for the login page
│   ├── SecurePage.ts             # POM for the secure area page
│   └── PageObjectManager.ts      # Manages and provides access to all page objects
├── tests/
│   ├── 01-successfulLogin.spec.ts
│   ├── 02-failedLoginEmail.spec.ts
│   ├── 03-failedLoginPassword.spec.ts
│   ├── 04-logoutFlow.spec.ts
│   ├── 05-emptyFieldsValidation.spec.ts
│   └── 06-uiElements.spec.ts
├── .env                          # Local environment variables (not committed)
├── .env.example                  # Environment variable template
├── playwright.config.ts          # Playwright configuration
└── tsconfig.json                 # TypeScript configuration
```

---

## CI/CD

This project uses GitHub Actions to run the full test suite automatically on every push and pull request to `main`.

The workflow (`.github/workflows/playwright.yml`) performs the following steps:

    1. Checks out the repository
    2. Sets up Node.js (LTS) with npm caching
    3. Installs npm dependencies via `npm ci`
    4. Installs Playwright browsers and their OS dependencies
    5. Runs the full test suite
    6. Uploads the HTML report as a build artifact (retained for 30 days)

### GitHub Secrets / Variables

Environment variables are supplied to the CI runner via GitHub repository secrets and variables.

| Name            | Type     | Description                            |
|-----------------|----------|----------------------------------------|
| `BASE_URL`      | Variable | Base URL of the application under test |
| `USER_USERNAME` | Secret   | Valid login username                   |
| `USER_PASSWORD` | Secret   | Valid login password                   |

---

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@playwright/test` | ^1.60.0 | Test runner and browser automation |
| `dotenv` | ^16.0.0 | Loads environment variables from `.env` |
| `typescript` | ^5.0.0 | TypeScript compiler |
| `@types/node` | ^25.7.0 | Node.js type definitions |
