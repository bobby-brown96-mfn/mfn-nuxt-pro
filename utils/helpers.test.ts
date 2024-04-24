// @vitest-environment node
import { it, expect, describe } from "vitest";

describe("findMinNotInArray", () => {
  it("basic 1 to 4 gets 5", () => {
    const res = findMinNotInArray([1, 2, 3, 4]);
    expect(res).toEqual(5);
  });

  it("1 to 4 gets 2", () => {
    const res = findMinNotInArray([1, 5, 3, 4]);
    expect(res).toEqual(2);
  });
});
