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

// import { makeCoffee, sendCoffee } from "./coffee.mjs";

// console.log("Saya memesan kopi di kafe.");

// makeCoffee(() => {
//   sendCoffee(() => {
//     console.log("Pramusaji memberikan kopi pesanan.");
//     console.log("Saya mendapatkan kopi dan menghabiskannya.");
//   });
// });

// Penanganan Error dengan Callback
// import { makeCoffee, sendCoffee } from "./coffee.mjs";

// const order = "Kopi Espresso";

// console.log(`Saya memesan ${order} di kafe.`);

// makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
//   if (makeCoffeeError) {
//     // Do something with error
//     console.error(makeCoffeeError);
//     return;
//   }

//   sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
//     if (sendCoffeeError) {
//       // Do something with error
//       console.error(sendCoffeeError);
//       return;
//     }

//     console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
//     console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
//   });
// });

/*
Dalam callback setTimeout, di sanalah penentuan hasil akan ditetapkan. Yes, isSuccess menjadi penentunya. Karena merupakan simulasi, kali ini kita tentukan keberhasilannya dengan meminta nilai angka random dari Math.random. Jika berhasil alias isSuccess bernilai true, kita bawakan data pada parameter kedua dari keberhasilan proses pembuatan kopi dan berikan null pada parameter pertama untuk menandakan bahwa tidak ada error yang terjadi. Jika gagal, nilai argumen akan sebaliknya.

Nice! Itulah cara pertama untuk menangani proses asynchronous dalam JavaScript. Simulasi hanyalah simulasi, bukan sebuah kasus nyata. Supaya memiliki pengalaman yang berbeda, mari kita coba lihat penerapan callback pada proses asynchronous dengan memanfaatkan salah satu Node.js API, yaitu fs untuk membaca file system.
*/

import { readFile } from "fs";

readFile("./sample.txt", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const greeting = data
    .toString()
    .replace("%name%", "Dicoding")
    .replace("%your_name%", "JavaScript");

  console.log(greeting);
});

/*
Mantap! Pada contoh program di atas, kita melihat program JavaScript sedang berusaha membaca berkas bernama sample.txt. Ini ditandai dengan mesin membaca method readFile dari module yang bernama fs. Ini adalah salah satu built-in module (module bawaan) dari Node.js untuk membaca berkas-berkas dalam sistem operasi.

Hal yang menjadi titik bahasan adalah method readFile memanfaatkan callback untuk menangani proses asinkron. Jika pembacaan berkas berhasil, kita dapat melihat isi dari sample.txt pada console. Inilah yang kita pelajari saat ini!
*/

// Promise
/*
Teknik terkini yang disajikan oleh JavaScript adalah Promise. Promise adalah sebuah objek khusus yang akan menentukan keberhasilan atau kegagalan dari proses asynchronous. Secara bahasa, Promise memiliki arti janji dan memang konsep yang dianut sangat mirip dengan makna tersebut.

Promise bekerja dengan tiga buah state atau kondisi.

Pending: kondisi awal sebuah proses berjalan. Belum ada hasil yang diharapkan.
Fulfilled: kondisi keberhasilan proses dan akan mengembalikan nilai positif. Misalnya mengembalikan isi berkas jika pembacaannya sukses.
Rejected: operasi terjadi kegagalan dan membawa alasan atau data mengenai masalah ini. Biasanya, data kegagalan berupa instance dari class Error.
Dari ketiga kondisi Promise, ini mirip dengan kehidupan nyata. Pending menandakan sebuah janji sedang berproses untuk menuju state diselesaikan, baik itu fulfilled maupun rejected. Masuk ke kategori fulfilled untuk menandakan sebuah janji ditepati dan memberikan hasil kesuksesannya serta rejected untuk menandakan sebuah janji teringkari dan memberikan alasannya. Promise pada akhirnya akan diselesaikan. Tugas kita sebagai developer adalah memberikan kode logika untuk menangani jika proses masuk ke fulfilled atau terjadi kesalahan (rejected).

Untuk mengurangi kemungkinan callback hell

Penggunaan Callback
doSomething((doSomethingError, doSomethingData) => {
  if (doSomethingError) {
    console.log(doSomethingData);
  }
 
  console.log(doSomethingData);
});

Penggunaan Promise
function onFulfilled(doSomethingData) {
  // Do your jobs when "fulfilled" happens…
  console.log(doSomethingData);
}
 
function onRejected(doSomethingError) {
  // Do your jobs when "rejected" happens…
  console.log(doSomethingError);
}
 
doSomething().then(onFulfilled, onRejected);

Lebih enak dibaca, ya? Ada sesuatu yang baru di sini, yaitu then. then adalah method khusus milik objek Promise. Ia yang akan menangani atau menerima hasil dari proses asinkron. Method ini menerima dua buah callback, yaitu callback untuk menangani keberhasilan (fulfilled) dan callback untuk menangani kegagalan (rejected).

Lalu, apa itu Promise? Mungkin, Anda penasaran juga isi dari doSomething. Nah, berikut isinya.
*/

// function promiseExecutor(resolve, reject) {
//   setTimeout(() => {
//     console.log("Melakukan sesuatu sebelum Promise diselesaikan.");

//     // Penentuan hasil dari proses asinkron
//     const number = Math.random();

//     // Nilai fulfillment dari Promise
//     if (number > 0.5) {
//       resolve("You did it!");
//     }

//     // Nilai rejection dari Promise
//     else {
//       reject(new Error("Sorry, something went wrong!"));
//     }
//   }, 2000);
// }

// function doSomething() {
//   return new Promise(promiseExecutor);
// }

/*
Function doSomething akan membuat dan mengembalikan nilai objek Promise. Ini ditandai dengan keyword new dan diikuti dengan objek Promise. Oleh karena itu, proses asinkron dimulai. Constructor Promise menerima satu buah callback dengan dua buah argumen. Kita namai argumen pertama adalah resolve dan argumen kedua adalah reject.

Ingat! Karena ini proses asinkron, kita harus menanganinya dengan method then untuk memasuki penanganan berikutnya, baik fulfilled maupun rejected.

Kunci dari cara kerja Promise adalah ia akan memasuki kondisi fulfilled dan mengeksekusi onFulfilled jika resolve terpanggil. Sebaliknya, jika reject yang ditemui, Promise akan memasuki kondisi rejected dan onRejected berjalan.

Silakan jalankan interactive code berikut dan lakukan berkali-kali untuk mencapai hasil yang berbeda.
*/
import { doSomething } from "./utils.mjs";

function onFulfilled(doSomethingData) {
  // Do your jobs when "fulfilled" happens…
  console.log(doSomethingData);
}

function onRejected(doSomethingError) {
  // Do your jobs when "rejected" happens…
  console.log(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);

// Jika ada yang menebak bahwa kita masih pakai callback, yap, memang hal itu benar. Namun, Promise dapat terhindar dari callback hell dengan melakukan chaining method then.

// Chaining
/*

*/
import { makeCoffee, sendCoffee } from "./coffee.mjs";

const order = "Kopi Espresso";

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
  .then(
    (value) => {
      return sendCoffee(value);
    },
    (error) => {
      console.error(error.message);
      throw error;
    }
  )
  .then(
    (value) => {
      console.log(`Pramusaji memberikan ${value} pesanan.`);
      console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    },
    (error) => {
      console.error(error.message);
      throw error;
    }
  );

/*
Pada main.mjs, pemanggilan then terjadi dua kali karena masih ada proses berikutnya, yaitu mengirimkan kopi, setelah pembuatan kopi sukses. Penanganan ini disebut dengan chaining method. Ini bisa dilakukan karena method then juga mengembalikan nilai Promise sebetulnya sehingga proses asinkron bisa kita teruskan.

Jika merasa penanganan error setiap proses asinkron sama, kita bisa memanfaatkan method catch. Ini artinya seluruh kemungkinan error yang dapat terjadi pada setiap proses akan memasuki method tersebut.

makeCoffee(order)
  .then((value) => {
    return sendCoffee(value);
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
  });

Berapa pun banyaknya proses asinkron yang perlu dilakukan untuk mencapai suatu hasil, kita dapat memanfaatkan method then.
makeCoffee(order)
  // .then((value) => { Do your jobs...  })
  // .then((value) => { Do your jobs...  })
  // .then((value) => { Do your jobs...  })
  // .then((value) => { Do your jobs...  })
  // .then((value) => { Do your jobs...  })
  // .then((value) => { Do your jobs...  })
  // .catch((error) => console.log(error.message));
Makin banyak proses asinkron berikutnya maka kode makin menjorok ke dalam. Jadi, silakan manfaatkan chaining method untuk mengatasi ketergantungan proses ini.

Pastikan kita mengembalikan nilai Promise-nya (return) jika memanfaatkan chaining method. Hal ini karena then akan berjalan jika menemukan objek Promise.

makeCoffee(order)
  .then((value) => {
    sendCoffee(value); // <-- tidak akan dilanjutkan ke then berikutnya.
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
    throw error;
  });
Contoh kode di atas akan berhenti sampai then pertama saja. Oleh karena itu, pastikan kembalikan nilai Promise-nya, ya.

makeCoffee(order)
  .then((value) => {
    return sendCoffee(value); // <-- akan dilanjutkan ke then berikutnya.
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
    throw error;
  });
*/
