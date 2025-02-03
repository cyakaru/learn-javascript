import { it, describe, expect } from "bun:test";
import { sum } from "./index.js";
import { error } from "console";

describe("Pengujian Fungsi Penambahan", () => {
  it("Hasil Penambahannya Berfungsi dengan baik.", () => {
    // Arrange
    const nilaiA = 1;
    const nilaiB = 1;

    // Action
    const hasil = sum(nilaiA, nilaiB);

    // Assert
    const hasilYangDiinginkan = 2;
    expect(hasil).toBe(hasilYangDiinginkan);
  });
  it("numA harus berupa number!", () => {
    const hasilYangAkanSalah = () => {
      // Arrange
      const nilaiA = 1;
      const nilaiB = "1";

      // Action
      sum(nilaiA, nilaiB);
    };
    // Assert
    expect(hasilYangAkanSalah).toThrow(error);
  });
  it("numB harus berupa number!", () => {
    const hasilYangAkanSalah = () => {
      // Arrange
      const nilaiA = 1;
      const nilaiB = "1";

      // Action
      sum(nilaiA, nilaiB);
    };
    // Assert
    expect(hasilYangAkanSalah).toThrow(error);
  });
});
