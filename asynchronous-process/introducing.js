/*
Dalam KBBI, asinkron berarti tidak dalam waktu atau kecepatan yang sama atau tidak serentak. Jika dimaknai dalam konteks pemrograman, proses atau operasi asinkron adalah sebuah operasi yang memungkinkan dijalankan oleh mesin dan kemudian dapat beralih fokus untuk menjalankan tugas-tugas (operasi) berikutnya sembari menunggu operasi sebelumnya selesai.

Proses yang tidak melakukan blocking process terhadap proses berikutnya karena tugas komputasi yang besar dan memakan banyak waktu. Lawan dari proses tersebut adalah synchronous. Jika synchronous process adalah proses yang dijalankan secara berurutan, mulai dari awal sampai akhir, asynchronous process adalah proses yang dapat dieksekusi secara paralel.
*/

/*
Simulation

setTimeout adalah salah satu dari sekian global function yang dapat menetapkan timer (pengatur waktu) bagi function agar dieksekusi. Jadi, ada dua parameter wajib, yaitu nilai berupa function dan number sebagai timer. Setelah timer sudah berakhir, seluruh cuplikan kode dalam function akan dieksekusi.
*/

const estimationTime = 10_000;

setTimeout(() => {
  console.log("Hello, world!");
}, estimationTime);

/* Output:
Hello, world!
*/
