import { test, expect } from "@playwright/test";

test.describe("Core navigation", () => {
  test("home page loads with hero content", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /Hi, I'm Adelio/ })).toBeVisible();
    await expect(page.getByText("I own the systems.")).toBeVisible();
  });

  test("nav links go to the right pages", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Projects", exact: true }).click();
    await expect(page).toHaveURL("/projects");
    await expect(page.getByRole("heading", { name: "Projects", exact: true })).toBeVisible();

    await page.getByRole("link", { name: "Blog", exact: true }).click();
    await expect(page).toHaveURL("/blog");

    await page.getByRole("link", { name: "About", exact: true }).click();
    await expect(page).toHaveURL("/about");
  });

  test("project case study page shows real content", async ({ page }) => {
    await page.goto("/projects/amons");
    await expect(page.getByRole("heading", { name: /AMons/ })).toBeVisible();
    await expect(page.getByText("Merit Award").first()).toBeVisible();
    await expect(page.getByText(/I Putu Bagus Erix Wijaya/)).toBeVisible();
  });

  test("blog post renders MDX content", async ({ page }) => {
    await page.goto("/blog/starting-the-six-month-roadmap");
    await expect(
      page.getByRole("heading", { name: /Starting a 6-month/ })
    ).toBeVisible();
  });

  test("resume link is present and points to the PDF", async ({ page }) => {
    await page.goto("/");
    const resumeLink = page.getByRole("link", { name: "Resume" });
    await expect(resumeLink).toHaveAttribute("href", "/resume.pdf");
  });
});
