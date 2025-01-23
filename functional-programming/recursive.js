/*
Rekursi adalah teknik sebuah fungsi memanggil dirinya sendiri sehingga operasi dalam fungsi tersebut terus berulang sampai mencapai kondisi tertentu untuk ia keluar dari perulangannya.

Mari kita ambil contoh, anggaplah kita ingin membuat fungsi yang dapat menghasilkan array berisi elemen deret angka dari 0 hingga n. Berikut adalah contoh implementasi jika kita menerapkan for loop.
*/
// function generateArray(n) {
//   const result = [];
//   for (let counter = 0; counter <= n; counter += 1) {
//     result.push(counter);
//   }
//   return result;
// }

// console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

/*
Dengan cara di atas, masalah memang dapat terselesaikan, tetapi sekali lagi dalam FP tidak ada memperbolehkan perubahan data sehingga kita tidak bisa mengubah nilai dari variabel counter.

Lalu, bagaimana solusi yang ditawarkan dengan rekursi? Berikut jawabannya.
*/

function generateArray(n) {
  if (n < 0) {
    return [];
  }

  return [...generateArray(n - 1), n];
}

console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

/*
Pada contoh di atas, fungsi generateArray memanggil dirinya sendiri dengan argumen yang dikurangi satu dan operasi dalam fungsi tersebut terus berjalan hingga argumen n bernilai kurang dari 0. Perhatikan bahwa dalam fungsi ini tidak ada sama sekali proses mengubah data, tetapi hanya ada expression yang menghasilkan nilai baru pada setiap iterasi pemanggilan fungsinya.

Ketika menerapkan rekursi, penting menetapkan kondisi untuk ia berhenti memanggil dirinya sendiri. Jika tidak, iterasi tidak akan pernah berhenti dan dampaknya program akan error karena call stack dalam JavaScript runtime akan mencapai batasnya. Ini bisa diibaratkan Anda berada di tengah sebuah cermin yang merefleksikan bayangan Anda tanpa batas.

Rekursi adalah teknik yang manjur untuk menyelesaikan berbagai masalah. Tantangannya adalah dibutuhkan cara berpikir yang berbeda. Terutama jika terbiasa dengan menulis kode secara imperatif, kemungkinan Anda belum terbiasa dan menyampingkan rekursi sebagai solusi. Namun, untungnya JavaScript telah menyediakan banyak fungsi bawaan yang dapat digunakan untuk masalah iterasi data, seperti Array.map, Array.filter, atau Array.forEach sehingga kita tidak perlu membuat fungsi rekursi secara mandiri. Fungsi-fungsi tersebut juga di balik layar menerapkan prinsip-prinsip FP, salah satunya perihal immutability yang sudah kami singgung tadi.
*/
