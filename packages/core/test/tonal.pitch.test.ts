import { interval, isPitch, note } from "../index";

describe("@tonal/tonal", () => {
  test("isPitch", () => {
    expect(isPitch(note("C4"))).toBe(true);
    expect(isPitch(interval("P4"))).toBe(true);

    expect(() => isPitch(note("X"))).toThrowError(
      "Parse error: Illegal note name (X) received"
    );
    expect(isPitch(undefined)).toBe(false);
    expect(isPitch("")).toBe(false);
  });
});
