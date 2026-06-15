import "../../src/components/uv-modal";
import { UVModal } from "../../src/components/uv-modal";

describe("UVModal Component", () => {
  let modal: UVModal;

  beforeEach(() => {
    modal = document.createElement("uv-modal") as UVModal;
    document.body.appendChild(modal);
  });

  afterEach(() => {
    document.body.removeChild(modal);
  });

  test("registers and defines custom element", () => {
    expect(customElements.get("uv-modal")).toBe(UVModal);
  });

  test("default state is closed", () => {
    expect(modal.opened).toBe(false);
    expect(modal.hasAttribute("opened")).toBe(false);
  });

  test("open() and close() methods modify state", () => {
    modal.open();
    expect(modal.opened).toBe(true);
    expect(modal.hasAttribute("opened")).toBe(true);

    modal.close();
    expect(modal.opened).toBe(false);
    expect(modal.hasAttribute("opened")).toBe(false);
  });

  test("setting opened property updates attribute", () => {
    modal.opened = true;
    expect(modal.hasAttribute("opened")).toBe(true);

    modal.opened = false;
    expect(modal.hasAttribute("opened")).toBe(false);
  });

  test("Escape key closes the modal and dispatches close event", () => {
    modal.open();
    const closeSpy = jest.fn();
    modal.addEventListener("close", closeSpy);

    const event = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
    });
    document.dispatchEvent(event);

    expect(modal.opened).toBe(false);
    expect(closeSpy).toHaveBeenCalled();
  });

  test("non-Escape key does not close the modal", () => {
    modal.open();
    const closeSpy = jest.fn();
    modal.addEventListener("close", closeSpy);

    const event = new KeyboardEvent("keydown", { key: "Enter", bubbles: true });
    document.dispatchEvent(event);

    expect(modal.opened).toBe(true);
    expect(closeSpy).not.toHaveBeenCalled();
  });
});
