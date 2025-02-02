/*
Testing dalam Node.js
Pengujian pada Node.js membutuhkan dua buah module, yaitu node:test dan node:assert. node:test berperan sebagai test runner yang menawarkan API untuk menuliskan skenario pengujian. Adapun node:assert berperan sebagai test assertion yang menyediakan objek untuk memvalidasi nilai antara actual (nilai sesungguhnya) dan expected (nilai yang diharapkan).
*/

export function add(numA, numB) {
  if (typeof numA !== "number") {
    return "Masukkan sebuah Angka!";
  }

  return numA + numB;
}

/*
Skenario positif berarti kasus pengujian yang mengharapkan keberhasilan output dari program. Misalnya, kita berharap add(1, 2) dapat menghasilkan 3. Berbeda dengan skenario negatif, ia akan memvalidasi kemungkinan error yang dapat terjadi dalam program. Misalnya, kemunculan error ketika parameter function tidak bertipe yang sesuai. Dengan menuliskan daftar skenarionya, kita akan lebih mudah menguji fungsionalitas aplikasi.
*/
