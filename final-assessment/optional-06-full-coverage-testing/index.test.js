import sum from "./index.js";
import { it, describe, expect } from "bun:test";

describe("Fungsi sum pada index.js", () => {
  it("Menghitung Penjumlahan dengan benar", () => {
    const nilaiA = 2;
    const nilaiB = 2;

    const hasil = sum(nilaiA, nilaiB);

    const hasilYangDiharapkan = 4;
    expect(hasil).toBe(hasilYangDiharapkan);
  });
  it("Memastikan Nilai A & B merupakan number dan akan mengembalikan nilai 0 jika salah satu dan kedua nilainya merupakan string.", () => {
    const hasilYangAkanSalah = () => {
      const nilaiA = "1";
      const nilaiB = 2;

      sum(nilaiA, nilaiB);

      expect(hasilYangAkanSalah).toReturn(0);
    };
  });
  it("Memastikan Nilai A & B akan mengembalikan nilai 0 jika salah satu dan kedua nilainya bernilai dibawah 0.", () => {
    const hasilYangAkanSalah = () => {
      const nilaiA = -1;
      const nilaiB = 2;

      sum(nilaiA, nilaiB);

      expect(hasilYangAkanSalah).toReturn(0);
    };
  });
});

// console.log(sum(1, -1));
