import "../../src/components/uv-dropdown";
import { UVDropdown } from "../../src/components/uv-dropdown";

describe("UVDropdown Component", () => {
  let dropdown: UVDropdown;
  let triggerBtn: HTMLButtonElement;

  beforeEach(() => {
    dropdown = document.createElement("uv-dropdown") as UVDropdown;
    // Add slot elements so trigger is actually in the DOM structure
    triggerBtn = document.createElement("button");
    triggerBtn.setAttribute("slot", "trigger");
    triggerBtn.textContent = "Toggle";

    const content = document.createElement("div");
    content.setAttribute("slot", "content");
    content.textContent = "Dropdown content";

    dropdown.appendChild(triggerBtn);
    dropdown.appendChild(content);

    document.body.appendChild(dropdown);
  });

  afterEach(() => {
    document.body.removeChild(dropdown);
  });

  test("registers and defines custom element", () => {
    expect(customElements.get("uv-dropdown")).toBe(UVDropdown);
  });

  test("default state is closed", () => {
    expect(dropdown.open).toBe(false);
    expect(dropdown.hasAttribute("open")).toBe(false);
  });

  test("toggle() opens and closes dropdown and dispatches event", () => {
    const toggleSpy = jest.fn();
    dropdown.addEventListener("uiverse:dropdown-toggle", toggleSpy);

    const event = new Event("click");
    dropdown.toggle(event);

    expect(dropdown.open).toBe(true);
    expect(dropdown.hasAttribute("open")).toBe(true);
    expect(toggleSpy).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { open: true } }),
    );

    dropdown.toggle(event);
    expect(dropdown.open).toBe(false);
    expect(dropdown.hasAttribute("open")).toBe(false);
    expect(toggleSpy).toHaveBeenLastCalledWith(
      expect.objectContaining({ detail: { open: false } }),
    );
  });

  test("click outside closes the dropdown", () => {
    dropdown.open = true;

    const outsideEl = document.createElement("div");
    document.body.appendChild(outsideEl);

    const clickEvent = new MouseEvent("click", { bubbles: true });
    outsideEl.dispatchEvent(clickEvent);

    expect(dropdown.open).toBe(false);
    document.body.removeChild(outsideEl);
  });

  test("click inside does not close the dropdown", () => {
    dropdown.open = true;

    const contentSlot = dropdown.querySelector('[slot="content"]');
    expect(contentSlot).not.toBeNull();
    contentSlot!.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(dropdown.open).toBe(true);
  });

  test("keyboard Enter and Space on trigger toggles the dropdown", () => {
    const triggerSlot = dropdown.shadowRoot?.querySelector(
      'slot[name="trigger"]',
    );
    expect(triggerSlot).not.toBeNull();

    const enterEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: true,
    });
    triggerSlot!.dispatchEvent(enterEvent);
    expect(dropdown.open).toBe(true);

    const spaceEvent = new KeyboardEvent("keydown", {
      key: " ",
      bubbles: true,
    });
    triggerSlot!.dispatchEvent(spaceEvent);
    expect(dropdown.open).toBe(false);
  });

  test("Escape key closes the dropdown when open", () => {
    dropdown.open = true;
    const toggleSpy = jest.fn();
    dropdown.addEventListener("uiverse:dropdown-toggle", toggleSpy);

    const escapeEvent = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
    });
    dropdown.dispatchEvent(escapeEvent);

    expect(dropdown.open).toBe(false);
    expect(toggleSpy).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { open: false } }),
    );
  });

  test("Escape key does not trigger event when already closed", () => {
    dropdown.open = false;
    const toggleSpy = jest.fn();
    dropdown.addEventListener("uiverse:dropdown-toggle", toggleSpy);

    const escapeEvent = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
    });
    dropdown.dispatchEvent(escapeEvent);

    expect(dropdown.open).toBe(false);
    expect(toggleSpy).not.toHaveBeenCalled();
  });
});
