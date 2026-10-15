# Mini QA Lab — Manual Testing & Automation

A beginner QA portfolio project demonstrating manual test case design and UI test automation using Playwright and TypeScript.

## Project Overview

This project tests basic task-management functionality in the public TodoMVC demo application. It focuses on writing test cases, validating expected behavior, and automating repetitive UI checks.

**Application Under Test:** https://demo.playwright.dev/todomvc/

## Tools & Technologies

- **Playwright Test** — Browser UI automation
- **TypeScript** — Test scripting language
- **Node.js & npm** — Runtime and package management
- **Visual Studio Code** — Development environment
- **Git & GitHub** — Version control and project hosting

## Test Scenarios

| Test ID | Scenario | Expected Result |
|---|---|---|
| TC-01 | Add a new task | The task appears in the list |
| TC-02 | Submit an empty task | No empty task is added |
| TC-03 | Mark a task as completed | The task is marked as completed |
| TC-04 | Delete a task | The task is removed from the list |

## Getting Started

### Prerequisites

Install Node.js and npm before running the project.

### Installation

Clone the repository:

```bash
git clone https://github.com/nisreendh05/mini-qa-Lab.git
cd mini-qa-Lab
```

Install dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

### Run Tests

Run all configured tests:

```bash
npx playwright test
```

Run only the TodoMVC tests:

```bash
npx playwright test tests/todomvc.spec.ts
```

Run tests in a visible browser:

```bash
npx playwright test tests/todomvc.spec.ts --headed
```

### View the HTML Report

```bash
npx playwright show-report
```

## Project Structure

```text
mini-qa-Lab/
├── tests/
│   ├── example.spec.ts
│   └── todomvc.spec.ts
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## Learning Objectives

- Design manual test cases with clear expected results.
- Automate UI test scenarios using Playwright.
- Use assertions to verify application behavior.
- Practice browser-based testing.
- Review automated test results and HTML reports.

## Limitations

- This project tests a public demo application, not a production system.
- The current scope covers basic task-management scenarios.
- Passing tests do not guarantee that the application is free of defects.
- Test results may vary depending on the browser, environment, and application state.

## Author

A Software Engineering student building practical QA testing skills through hands-on projects.