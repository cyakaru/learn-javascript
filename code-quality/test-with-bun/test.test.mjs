import { add } from "./calculator.mjs";
import { it, describe, expect } from "bun:test";

describe("Penjumlahan", () => {
  it("1 + 1", () => {
    const numX = 1;
    const numY = 2;

    add(numX, numY);
    expect(1 + 1).toBe(2);
  });
});
