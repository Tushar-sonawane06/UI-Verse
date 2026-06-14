import "../../src/components/uv-tooltip";
import { UVTooltip } from "../../src/components/uv-tooltip";

describe("UVTooltip Component", () => {
  let tooltip: UVTooltip;
  let triggerEl: HTMLElement;
  let tooltipEl: HTMLElement;

  beforeEach(() => {
    tooltip = document.createElement("uv-tooltip") as UVTooltip;
    const trigger = document.createElement("span");
    trigger.textContent = "Hover/Focus me";
    tooltip.appendChild(trigger);
    document.body.appendChild(tooltip);

    // Grab elements from Shadow DOM
    const sr = tooltip.shadowRoot!;
    triggerEl = sr.querySelector("span") as HTMLElement;
    tooltipEl = sr.querySelector(".tooltip") as HTMLElement;
  });

  afterEach(() => {
    document.body.removeChild(tooltip);
  });

  test("registers and defines custom element", () => {
    expect(customElements.get("uv-tooltip")).toBe(UVTooltip);
  });

  test("default state is hidden", () => {
    expect(tooltipEl.hasAttribute("hidden")).toBe(true);
  });

  test("show() and hide() methods change visibility", () => {
    tooltip.show();
    expect(tooltipEl.hasAttribute("hidden")).toBe(false);

    tooltip.hide();
    expect(tooltipEl.hasAttribute("hidden")).toBe(true);
  });

  test("mouseenter and mouseleave events toggle visibility", () => {
    triggerEl.dispatchEvent(new MouseEvent("mouseenter"));
    expect(tooltipEl.hasAttribute("hidden")).toBe(false);

    triggerEl.dispatchEvent(new MouseEvent("mouseleave"));
    expect(tooltipEl.hasAttribute("hidden")).toBe(true);
  });

  test("focusin and focusout events toggle visibility", () => {
    triggerEl.dispatchEvent(new FocusEvent("focusin"));
    expect(tooltipEl.hasAttribute("hidden")).toBe(false);

    triggerEl.dispatchEvent(new FocusEvent("focusout"));
    expect(tooltipEl.hasAttribute("hidden")).toBe(true);
  });
});
