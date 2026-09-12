import { test, expect } from "@playwright/test";

test.describe("Portfolio Assistant chat widget", () => {
  test("opens, answers a suggested question, and can be closed", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Open portfolio assistant" }).click();
    await expect(page.getByPlaceholder("Ask a question…")).toBeVisible();

    await page.getByRole("button", { name: "What do you do at Telkomsel?" }).click();
    await expect(page.getByText(/IT Tower for 5 enterprise ad-tech systems/)).toBeVisible({
      timeout: 3000,
    });

    await page.getByRole("button", { name: "Close chat" }).click();
    await expect(page.getByPlaceholder("Ask a question…")).not.toBeVisible();
  });

  test("free-typed questions get a grounded answer", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open portfolio assistant" }).click();

    await page.getByPlaceholder("Ask a question…").fill("what are your skills");
    await page.getByRole("button", { name: "Send" }).click();

    await expect(page.getByText(/Next\.js, TypeScript, React/)).toBeVisible({ timeout: 3000 });
  });
});

test.describe("Command palette", () => {
  test("opens with Cmd+K and navigates to a search result", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Meta+k");
    const input = page.getByPlaceholder("Search pages, projects, posts…");
    await expect(input).toBeVisible();

    await input.fill("myoscope");
    await page.getByText("MyoScope Alert").click();

    await expect(page).toHaveURL("/projects/myoscope-alert");
    await expect(input).not.toBeVisible();
  });

  test("opens from the visible Search button", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    await page.getByRole("button", { name: "Open search (Command K)" }).click();
    await expect(page.getByPlaceholder("Search pages, projects, posts…")).toBeVisible();
  });
});
