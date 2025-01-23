// import { makeCoffee } from "./coffee.mjs";

// console.log("Saya memesan kopi di kafe.");

// makeCoffee(() => {
//   console.log("Pramusaji memberikan kopi pesanan.");
//   console.log("Saya mendapatkan kopi dan menghabiskannya.");
// });

/*
Sebagaimana hasil yang diberikan oleh mesin, perintah console.log dalam makeCoffee dijalankan belakangan. Ini ditandai dengan teks “Pramusaji sedang membuatkan kopi kesukaan saya dalam 5 detik.” muncul di akhir. Bagaimana bisa pramusaji memberikan kopi dan kita menghabiskannya jika kopinya saja masih dalam proses pembuatan? Tentunya ini tidak sesuai dengan urutan kode (sequential order) dan beginilah perilaku dari asynchronous process. Ingat! Ini kita simulasikan dengan setTimeout.

Bagi kita yang terbiasa dengan sequential order, ini terlihat aneh. Namun, kita bisa membuktikan bahwa proses yang memakan waktu lama (asynchronous) tidak melakukan blocking process dan kode-kode setelahnya tetap dapat dijalankan sembari proses asinkron diselesaikan.
*/

//Callback
/*
Callback adalah sebuah function yang dijadikan sebagai parameter bagi function yang lain. Ini persis dengan hal yang pernah kita pelajari pada materi Function Expression. Contoh callback yang pernah kita temui sebelumnya adalah memberikan function pada setTimeout dalam parameter pertama. Setelah mencapai nilai timeout, callback akan dibangkitkan atau dijalankan.

import { makeCoffee } from './coffee.mjs';

console.log('Saya memesan kopi di kafe.');

makeCoffee(() => {
  console.log('Pramusaji memberikan kopi pesanan.');
  console.log('Saya mendapatkan kopi dan menghabiskannya.');
});
*/

/*
Pada kode di atas, kita memiliki beberapa perubahan. makeCoffee memiliki satu parameter yang akan menerima function alias callback agar dijalankan setelah proses pembuatan kopi selesai. Function apa yang akan kita masukkan? Function tersebut adalah tugas untuk pramusaji memberikan kopi kepada customer dan kemudian customer menghabiskan kopinya. Hal yang pasti adalah kita berhasil memastikan bahwa suatu tugas benar-benar dijalankan hanya ketika proses asinkron selesai. Inilah callback untuk penanganan asynchronous process.

Mungkin ada yang berpikir bahwa proses pemberian kopi juga berupa asinkron dan kita masih bisa melanjutkan tugas lain pada waktu itu. Pramusaji tentunya membutuhkan waktu untuk memindahkan kopi ke cangkir dan mempercantiknya serta perlu waktu untuk berjalan menuju meja customer. Tepat! Mari kita sesuaikan kodenya seperti kode berikut.
*/

import { makeCoffee, sendCoffee } from "./coffee.mjs";

console.log("Saya memesan kopi di kafe.");

makeCoffee(() => {
  sendCoffee(() => {
    console.log("Pramusaji memberikan kopi pesanan.");
    console.log("Saya mendapatkan kopi dan menghabiskannya.");
  });
});
