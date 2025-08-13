import { isGBPSelected } from "./helpers";

describe("isGBPSelected", () => {
  it("returns 'U.K. Pound Sterling (GBP)' when code is 'gbp'", () => {
    const result = isGBPSelected({ name: "British Pound", code: "gbp" });
    expect(result).toBe("U.K. Pound Sterling (GBP)");
  });

  it("returns formatted name and code for other currencies", () => {
    const result = isGBPSelected({ name: "US Dollar", code: "USD" });
    expect(result).toBe("US Dollar (USD)");
  });
});
