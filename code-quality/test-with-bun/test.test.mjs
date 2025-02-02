/*
Mendefinisikan testing dengan Bun mirip rasanya seperti menggunakan Jest. Bagi yang belum kenal, Jest adalah testing framework yang menawarkan lebih banyak kebutuhan perihal pengujian otomatis yang tidak ditawarkan oleh native API, seperti dari Node.js atau Bun. Bun memang ingin menyesuaikan gaya penulisan testing dengan framework terkenal itu agar para developer yang terbiasa dengannya tidak perlu pusing mempelajari sintaks baru.
Module test dari Bun terletak pada bun:test. Seluruh kebutuhan terkait testing ada di sana, baik test runner maupun test assertion.
*/

import { add } from "./calculator.mjs";
import { it, describe, expect } from "bun:test";

describe("arithmetic", () => {
  it("1 + 1", () => {
    expect(2 + 2).toBe(4);
  });

  it("3 * 2", () => {
    expect(3 * 2).toBe(6);
  });
});

/*
bun:test sedikit berbeda dengan node:test. Jika Node.js menggunakan assert untuk menguji nilai, Bun menggunakan expect dan matcher. expect menerima satu parameter yang menjadi actual value dan kita membutuhkan .toBe sebagai matcher untuk mengujinya dengan expected value. Bagaimana dengan describe dan it? Mereka mirip dengan Node.js, kok.
*/

describe("Hasil Penambahan", () => {
  it("Hasil dari 2 + 2", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("Nilai numA harus berupa angka!", () => {
    expect(add(1, "2")).toBe(3);
  });
});

/*
describe('Calculator', () => {
  it('should add correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;
 
    // Action
    const actualValueFirst = add(operandA, operandB);
 
    // Assert
    const expectedValueFirst = 2;
    expect(actualValueFirst).toBe(expectedValueFirst);
  });
 
  it('should throw an error if string passed on numA parameter', () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = '5';
      const operandB = 4;
 
      // Action
      add(operandA, operandB);
    };
 
    // Assert
    expect(potentialErrorToBeThrew).toThrow(Error);
  });
 
  it('should throw an error if string passed on numB parameter', () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = 10;
      const operandB = '8';
 
      // Action
      add(operandA, operandB);
    };
 
    // Assert
    expect(potentialErrorToBeThrew).toThrow(Error);
  });
});
*/
