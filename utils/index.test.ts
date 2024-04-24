// @vitest-environment node
import { it, expect, describe } from "vitest";

describe("boolDefaultCheck", () => {
  it("bool check true to true", () => {
    const check = boolDefaultCheck({ def: true, val: true });
    expect(check).toBe(true);
  });

  it("bool check true to false", () => {
    const check = boolDefaultCheck({ def: true, val: false });
    expect(check).toBe(false);
  });

  it("bool check false to true", () => {
    const check = boolDefaultCheck({ def: false, val: true });
    expect(check).toBe(true);
  });

  it("bool check true against undefined", () => {
    const check = boolDefaultCheck({ def: true, val: undefined });
    expect(check).toBe(true);
  });

  it("bool check true against null", () => {
    const check = boolDefaultCheck({ def: true, val: null });
    expect(check).toBe(true);
  });
});
