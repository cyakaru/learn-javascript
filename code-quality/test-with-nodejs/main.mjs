import { test } from "node:test";
import assert from "node:assert";
import { add } from "./calculator.mjs";

test("melakukan penjumlahan dengan baik", () => {
  // Arrange
  const operandA = 1;
  const operandB = 1;

  // Action
  const actualValue = add(operandA, operandB);

  // Assert
  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});

/*
Pengujian dilakukan menggunakan function test yang diimpor dari node:test. Setiap kali ada kasus pengujian dan akan diuji, kita perlu mendefinisikannya dengan function tersebut. Function test menerima dua parameter, yaitu string sebagai nama pengujian dan callback function yang berisi kode pengujian. Lalu, untuk melakukan validasi nilai dari function, kita gunakan assertion dari module node:assert.
Untuk menguji ketahanan aplikasi, biasanya kita perlu sampel data yang lebih bervariasi. Bagaimana jika kita uji dengan nilai string sebagai parameter? Kita tahu bahwa operasi penjumlahan harus dilakukan dengan dua buah operan bertipe number. Jika salah satunya string, operasi yang terjadi malah penggabungan (concatenation).
*/

test("memastikan jika numA diinputkan number", () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = "1";
    const operandB = 2;

    // Action
    add(operandA, operandB);

    // Assert
    assert.throws(potentialErrorToBeThrew, Error);
  };
});

/*
Ingat, ya, bahwa kasus pengujian didefinisikan dengan function test. Oleh karena itu, kita panggil function test untuk kedua kalinya. Karena ini akan menguji kemunculan error saat string digunakan, kita gunakan assertion bernama throws untuk melakukannya. Ada dua parameter penting untuk assertion tersebut.

Parameter pertama, kita isikan callback berisi kode yang berpotensi terjadi error exception.
Parameter kedua, kita berikan objek Error karena nilai tersebut yang diharapkan keluar ketika program terjadi error.

Agar pengujian berhasil, kita perlu membaca dengan saksama pesan error-nya. Berikut adalah tips dari kami.

Perhatikan seluruh pengujian gagal berdasarkan namanya. Biasanya diwarnai merah. Dalam hal ini, pengujian yang gagal bernama “should throw an error if string passed on numA parameter”.
Pesan error biasanya diidentifikasi berdasarkan nama dan pesan error-nya. Biasanya terletak tepat di bawah nama pengujian. Anda bisa perhatikan teks “AssertionError: Missing expected exception” dalam masalah ini.
Jika masih bingung, cukup perhatikan saja pesan error-nya. Dalam kasus kita, Node.js memberitahu bahwa ternyata kemunculan error exception yang diharapkan tidak terdeteksi.
*/
