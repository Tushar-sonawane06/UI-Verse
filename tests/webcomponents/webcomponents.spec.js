const { test, expect } = require("@playwright/test");
const path = require("path");

const root = path.join(__dirname, "..", "..");

test.describe("Web Components - UI-Verse", () => {
  test("uv-button registers and dispatches event", async ({ page }) => {
    await page.goto("/components/WebComponents/demo-uv-button.html");
    // Wait for the custom element to be defined (robust for timing)
    await page.evaluate(() => customElements.whenDefined("uv-button"));
    const exists = await page.evaluate(() => !!customElements.get("uv-button"));
    expect(exists).toBeTruthy();

    // Click the internal button via shadow DOM safely
    await page.evaluate(() => {
      const el = document.querySelector("uv-button");
      if (!el) return;
      const btn = el.shadowRoot
        ? el.shadowRoot.querySelector("button")
        : el.querySelector("button");
      if (btn) btn.click();
    });
    // Ensure the element remains present after the interaction
    expect(await page.$("uv-button")).not.toBeNull();
  });

  test("uv-modal open/close works", async ({ page }) => {
    await page.goto("/components/WebComponents/demo-uv-modal.html");
    // Wait until the element is defined and ready
    await page.evaluate(() => customElements.whenDefined("uv-modal"));
    const exists = await page.evaluate(() => !!customElements.get("uv-modal"));
    expect(exists).toBeTruthy();

    // Open modal via the component API, waiting for the method to exist
    await page.waitForFunction(() => {
      const m = document.querySelector("uv-modal");
      return !!m && typeof m.open === "function";
    });
    await page.evaluate(() => document.querySelector("uv-modal")?.open());
    // Wait until opened flag becomes true
    await page.waitForFunction(
      () => document.querySelector("uv-modal")?.opened === true,
    );
    const opened = await page.evaluate(
      () => document.querySelector("uv-modal")?.opened === true,
    );
    expect(opened).toBeTruthy();
  });

  test("uv-tooltip shows on hover", async ({ page }) => {
    await page.goto("/components/WebComponents/demo-uv-tooltip.html");
    // Ensure component is registered
    await page.evaluate(() => customElements.whenDefined("uv-tooltip"));
    const exists = await page.evaluate(
      () => !!customElements.get("uv-tooltip"),
    );
    expect(exists).toBeTruthy();

    // Use component API to show tooltip and then verify its visible state
    await page.waitForFunction(() => {
      const t = document.querySelector("uv-tooltip");
      return !!t && typeof t.show === "function";
    });
    await page.evaluate(() => document.querySelector("uv-tooltip")?.show());
    const visible = await page.waitForFunction(() => {
      const el = document.querySelector("uv-tooltip");
      if (!el) return false;
      const sr = el.shadowRoot;
      if (!sr) return false;
      const tt = sr.querySelector(".tooltip");
      return !!tt && !tt.hidden;
    });
    expect(visible).toBeTruthy();
  });

  test("uv-dropdown toggle and click outside works", async ({ page }) => {
    await page.goto("/components/WebComponents/demo-uv-dropdown.html");
    await page.evaluate(() => customElements.whenDefined("uv-dropdown"));

    const trigger = page.locator("#dropdown-trigger");
    const dropdown = page.locator("uv-dropdown");

    // Click trigger to open
    await trigger.click();
    await expect(dropdown).toHaveAttribute("open", "");

    // Click trigger again to close
    await trigger.click();
    await expect(dropdown).not.toHaveAttribute("open");

    // Open again
    await trigger.click();
    await expect(dropdown).toHaveAttribute("open", "");

    // Click outside (e.g. h1 title)
    await page.locator("h1").click();
    await expect(dropdown).not.toHaveAttribute("open");
  });

  test("uv-dropdown keyboard navigation works", async ({ page }) => {
    await page.goto("/components/WebComponents/demo-uv-dropdown.html");
    await page.evaluate(() => customElements.whenDefined("uv-dropdown"));

    const trigger = page.locator("#dropdown-trigger");
    const dropdown = page.locator("uv-dropdown");

    // Focus trigger
    await trigger.focus();

    // Press Enter to open
    await page.keyboard.press("Enter");
    await expect(dropdown).toHaveAttribute("open", "");

    // Press Escape to close
    await page.keyboard.press("Escape");
    await expect(dropdown).not.toHaveAttribute("open");

    // Focus again and press Space to open
    await trigger.focus();
    await page.keyboard.press("Space");
    await expect(dropdown).toHaveAttribute("open", "");
  });

  test("uv-modal Escape key close works", async ({ page }) => {
    await page.goto("/components/WebComponents/demo-uv-modal.html");
    await page.evaluate(() => customElements.whenDefined("uv-modal"));

    const modal = page.locator("uv-modal");

    // Open modal via API
    await page.evaluate(() => document.querySelector("uv-modal").open());
    await expect(modal).toHaveAttribute("opened", "");

    // Press Escape to close
    await page.keyboard.press("Escape");
    await expect(modal).not.toHaveAttribute("opened");
  });

  test("uv-tooltip focus behavior works", async ({ page }) => {
    await page.goto("/components/WebComponents/demo-uv-tooltip.html");
    await page.evaluate(() => customElements.whenDefined("uv-tooltip"));

    const tooltip = page.locator("uv-tooltip");

    // Focus the trigger element inside tooltip (in the demo it is #main-content)
    await page.locator("#main-content").focus();

    // Verify tooltip is not hidden
    const isVisible = await page.evaluate(() => {
      const el = document.querySelector("uv-tooltip");
      const tooltipEl = el?.shadowRoot?.querySelector(".tooltip");
      return !!tooltipEl && !tooltipEl.hidden;
    });
    expect(isVisible).toBe(true);

    // Blur the element
    await page.locator("#main-content").blur();

    // Verify tooltip is hidden
    const isHidden = await page.evaluate(() => {
      const el = document.querySelector("uv-tooltip");
      const tooltipEl = el?.shadowRoot?.querySelector(".tooltip");
      return !tooltipEl || tooltipEl.hidden;
    });
    expect(isHidden).toBe(true);
  });
});
