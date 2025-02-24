import { interval, isNamed, note } from "../index";

describe("@tonaljs/core", () => {
  test("isNamed", () => {
    expect(isNamed(note("C4"))).toBe(true);
    expect(isNamed(interval("P4"))).toBe(true);
    expect(() => isNamed(note("X"))).toThrowError(
      "Parse error: Illegal note name (X) received"
    );

    expect(isNamed(undefined)).toBe(false);
    expect(isNamed(null)).toBe(false);
    expect(isNamed("")).toBe(false);
  });
});
