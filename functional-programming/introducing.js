/*
Functional programming (selanjutnya disingkat menjadi FP) adalah paradigma pemrograman yang didasarkan pada fungsi matematika murni, yakni fungsi harus menghindari perubahan data sehingga selalu menghasilkan nilai sama ketika diberikan argumen sama. Dalam FP, fungsi adalah elemen utama yang digunakan untuk memecah kode dan membangun keseluruhan program. Dengan menerapkan konsep-konsep dalam FP, kita dapat membangun aplikasi menggunakan kode yang deklaratif (lebih simpel, tegas, dan terprediksi).

Sebagai gambaran untuk Anda yang belum tahu deklaratif dan imperatif (kebalikan dari deklaratif), simak contoh kode di bawah ini. Tujuan kode ini adalah menghasilkan nilai string baru dari nilai string yang sudah ada sebelumnya.
*/
// const names = ["Harry", "Ron", "Jeff", "Thomas"];

// const newNamesWithExcMark = [];

// for (let i = 0; i < names.length; i++) {
//   newNamesWithExcMark.push(`${names[i]}!`);
// }

// console.log(newNamesWithExcMark);
/*
Sebagai orang yang baru belajar pemrograman, kita sering menggunakan cara for-loop untuk menyelesaikan masalah tersebut. Ketahuilah bahwa kode di atas bersifat imperatif, yakni untuk mencapai suatu tujuan, kita perlu menulis instruksi yang sifatnya langkah demi langkah. Kita perlu mendefinisikan cara melakukan perulangan, waktu perulangannya harus berhenti, hingga mengisikan nilai ke array baru. Dampaknya, kode yang ditulis menjadi banyak. Gaya imperatif memang fokusnya pada “how to solve”, bukan “what to solve”.

Lantas, bagaimana dengan gaya deklaratif?

Berikut adalah kode untuk menyelesaikan masalah yang sama, tetapi menggunakan gaya deklaratif.
*/

const names = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExcMark = names.map((name) => `${name}!`); // <- kaya array destructuring

console.log(newNamesWithExcMark);

/*
Inilah bentuk dari kode deklaratif. Coba bandingkan dengan kode sebelumnya, tentu ini jauh lebih ringkas dan terlihat simpel. Inilah salah satu benefit ketika kita memecahkan masalah dengan gaya deklaratif yang notabene dianut dalam paradigma FP. Fungsi .map() yang Anda lihat di atas merupakan salah satu implementasi dari konsep-konsep dalam FP. Konsep utama dalam FP meliputi pure function, high-order function, recursion, dan immutability. Pada modul ini, Anda akan memahami cara kerja fungsi map yang merupakan implementasi dari konsep-konsep dalam FP.

Tantangan terberat dalam mempelajari FP adalah menghilangkan kebiasaan berpikir dari paradigma imperatif yang sudah sering kita anut. Tentu hal ini membutuhkan waktu yang panjang agar Anda benar-benar terbiasa dengan cara berpikir functional programming. Belajar FP dalam JavaScript sebetulnya bisa dilakukan secara perlahan. Anda masih bisa menggunakan konsep-konsep FP bersama paradigma yang lain, sebelum memutuskan seluruh solusi diselesaikan dengan FP.
*/

/*
FP menawarkan banyak manfaat, selain membuat kode jadi lebih ringkas, kode yang Anda tulis akan lebih mudah untuk diuji. Sebab, dengan menerapkan FP, fungsi yang kita buat hasilnya selalu terprediksi. Untuk mencapai manfaat tersebut, hal dasar yang perlu kita terapkan adalah konsep pure function.

Pure function merupakan istilah bagi sebuah fungsi yang memiliki dua sifat berikut.

Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
Contoh, ketika fungsi diberikan argumen X, ia harus selalu mengembalikan nilai Y meski dipanggil dalam kondisi dan waktu yang beda. Jadi, nilai yang dihasilkan oleh fungsi selalu terprediksi. Untuk mencapai ini, fungsi tidak boleh mengakses nilai di luar argumen dan variabel cakupan global.

Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
Dalam konteks ini, efek samping merujuk pada segala perubahan yang dilakukan oleh fungsi pada variabel atau keadaan di luar cakupannya, seperti mengubah variabel global, berinteraksi dengan input dan output.
Jika tidak memenuhi sifat tersebut, fungsi akan dikategorikan sebagai impure function.

Oke. Setelah mengetahui sifat dari pure function dan sebaliknya, kita lakukan sedikit pemanasan. Coba tebak, kira-kira fungsi addWith di bawah ini termasuk pure function atau impure function?
*/

// let value = 0;

// function addWith(addingValue) {
//   value += addingValue;
//   console.log(`Current value is ${value}`);
//   return value;
// }

// const result1 = addWith(1); // Output: Current value is 1
// const result2 = addWith(1); // Output: Current value is 2
// const result3 = addWith(1); // Output: Current value is 3

// console.log(result1, result2, result3); // Output: 1, 2, 3

/*
Jika menjawab impure function, jawaban Anda benar! Fungsi addWith dikategorikan sebagai impure karena sifat pure function tidak terpenuhi.

(X) Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
Contoh kode di atas menunjukkan bahwa nilai yang dikembalikan oleh fungsi addWith yang diberikan argumen 1 selalu berbeda. Hal ini dipengaruhi oleh keadaan variabel value yang selalu berubah setiap kali pemanggilan terjadi. Ups! Ada efek sampingnya juga di sini.

(X) Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
Pemanggilan fungsi addWith memiliki efek samping. Selain mengubah variabel value, fungsi ini juga menulis sesuatu ke I/O melalui pemanggilan console.log. Efek samping ini membuat hasil dari pemanggilan fungsi tidak hanya bergantung pada argumen yang diberikan, tetapi juga keadaan di luar fungsi tersebut.

Bagaimana bentuk versi pure function dari addWith? Berikut kodenya.
*/

function addWith(value, addingValue) {
  return value + addingValue;
}

const result1 = addWith(0, 1);
console.log(`result1 is ${result1}`); // Output: result1 is 1

const result2 = addWith(result1, 1);
console.log(`result2 is ${result2}`); // Output: result2 is 2

const result3 = addWith(result2, 1);
console.log(`result3 is ${result3}`); // Output: result3 is 3

console.log(result1, result2, result3); // Output: 1, 2, 3

/*
Sekarang fungsi addWith menjadi pure function karena seluruh sifatnya telah terpenuhi.

(✓) Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
Saat ini, fungsi addWith menerima dua argumen, yaitu value dan addingValue. Selama kedua nilai argumen tersebut sama, addWith akan mengembalikan nilai yang sama, kapan pun dan saat kondisi apa pun. Ini karena fungsi addWith sudah tidak bergantung pada nilai di luar dari cakupannya.

(✓) Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
Fungsi addWith sudah tidak mengubah nilai di luar cakupannya, tetapi ia menghasilkan nilai baru. Dengan dihapusnya kode console.log dari dalam fungsi, ia juga sudah tidak melakukan operasi I/O yang dapat menyebabkan efek samping.

Agar Anda semakin paham membedakan pure function dan impure function, simak beberapa contoh fungsi dalam masing-masing kategorinya.
*/
// Impure
// Mengubah nilai variabel global
let count = 0;
function increment() {
  count++;
}

// Mengakses waktu sistem
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

// Mengubah status objek yang diterima sebagai parameter
function updateUser(user) {
  user.name = "Updated Name";
}

// Menulis ke berkas
const fs = require("fs");

function writeToFile(data) {
  fs.writeFileSync("data.txt", data);
}

// Pure
// Menghitung total harga pesanan tanpa mengubah input
function calculateTotalPrice(orderItems) {
  return orderItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

// Memfilter dan memetakan data tanpa mengubah array asli
function getActiveUsernames(users) {
  return users.filter((user) => user.isActive).map((user) => user.username);
}

// Membuat objek baru berdasarkan input tanpa mengubah input asli
function createUserProfile(user, address) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    address: {
      street: address.street,
      city: address.city,
      country: address.country,
    },
  };
}

// Menggabungkan dua objek tanpa mengubah objek asli
function mergeSettings(defaultSettings, userSettings) {
  return {
    ...defaultSettings,
    ...userSettings,
  };
}

/*
Keuntungan menggunakan pure function termasuk kemampuan untuk mengoptimalkan kode melalui memoization, yakni hasil dari fungsi disimpan dan digunakan kembali jika input yang sama ditemukan. Teknik memoization termasuk praktik advance yang tidak akan kami jelaskan rinci di kelas ini. Sebagai informasi saja, dalam beberapa kasus, teknik memoization ini bisa meningkatkan performa secara signifikan.
*/
