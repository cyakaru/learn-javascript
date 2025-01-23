// import { doSomething } from "./async2.js";

// console.log("Start.");

// doSomething().then((value) => {
//   console.log(value);
// });

// console.log("End.");

/* Output:
Start.
End.
You did it.
*/

/*
Misalnya Anda tetap ingin memiliki pengalaman kode yang berjalan secara sekuensial. Mari kita sebut ini sebagai gaya synchronous. Dengan harapan, berikut adalah output yang diharapkan jika kode di atas dijalankan ulang.

Start.
You did it.
End.
Untuk mencapai gaya synchronous, JavaScript memiliki fitur async-await untuk menangani Promise. Mari kita belajar implementasinya.

Istilah “async-await” terdiri dari dua keyword JavaScript, yaitu async dan await. Kita perlu menggunakan mereka berdua secara bersamaan dan tidak bisa mencederai salah satunya. Hal yang perlu dicatat adalah fitur ini hanya bisa dipakai jika menggunakan function.

Berikut adalah hasil perubahan contoh kode di atas.

import { doSomething } from './utils.mjs';
 
async function promiseWithAsyncAwait() {
  console.log('Start.');
 
  const result = await doSomething();
  console.log(result);
 
  console.log('End.');
}
 
promiseWithAsyncAwait();

*/

// import { doSomething } from "./utils.mjs";

// async function promiseWithAsyncAwait() {
//   console.log("Start.");

//   const result = await doSomething();
//   console.log(result);

//   console.log("End.");
// }

// promiseWithAsyncAwait();

// Penganan Error denga async await dengan try catch

import { doSomething } from "./utils.mjs";

async function promiseWithAsyncAwait() {
  try {
    console.log("Start.");

    const result = await doSomething();
    console.log(result);

    console.log("End.");
  } catch (error) {
    console.log(error.message);
  }
}

promiseWithAsyncAwait();
