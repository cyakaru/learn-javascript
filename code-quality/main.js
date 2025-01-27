/*
Code quality adalah kualitas kode.
*/
// Type System dalam JavaScript
/*
Ada indikator lain yang juga dapat membedakan beragam bahasa, yaitu type system. Ini terbagi menjadi dua, yaitu static dan dynamic. Dalam hal ini, JavaScript termasuk tipe dynamic.
*/
// Statically-Typed vs. Dynamically-Typed Language
/*
Setiap bahasa pemrograman memiliki sistem pemeriksaan tipe data. Ada yang sistemnya bertipe static dan dynamic. Hal yang membedakan adalah waktu pemeriksaannya.
Static: tipe nilai diperiksa saat compile.
Dynamic: tipe nilai diperiksa ketika eksekusi (runtime).
Ciri utama lainnya yang menjadi pembeda adalah adanya penentuan tipe nilai saat deklarasi sebuah unit. Contohnya variabel. Bagi Anda yang familier dengan Java, C++, atau Golang, mereka adalah bahasa berkategori statically-typed. Bahasa-bahasa ini akan memberi batasan terhadap nilai yang dapat diemban oleh variabel karena pemeriksaan tipe nilai biasanya terjadi pada waktu compile.
Bahasa berkategori dynamically-typed akan mengetahui tipe datanya saat program berjalan. Masih ingat dengan let dan const, bukan? Apa pun teknik pembuatannya, kita bisa memberi nilai apa pun pada sebuah variabel tanpa perlu menetapkan tipe data secara eksplisit. Jika menggunakan let, nilai variabel memungkinkan untuk diganti saat runtime.
*/
// The Promblem
/*
Kita mungkin punya pendapat bahwa bahasa yang mengadopsi dynamic type sangat menguntungkan dari segi produktivitas. Tidak bertele-tele saat menulis kode, proses debugging lebih mudah, dan kompilasi menjadi lebih cepat menjadi faktor-faktor kebahagiaan tersendiri dari seorang developer.
*/

function add(numA, numB) {
  return numA + numB;
}

console.log(add(1, 1)); // 2
console.log(add(3, 2)); // 5
console.log(add("5", 4)); // ???

/*
Ada kasus nilai string ditambahkan dengan number. Ini tidak akan menjadi masalah (biasanya type error) karena JavaScript memiliki fitur type coercion. Jika kita tidak berhati-hati dengan masalah ini, program akan berakhir dengan hasil yang aneh, yaitu “54” (string). Selain dynamic, JavaScript juga tergolong weakly-typed language.

Permasalahan di atas datang dari sisi interpreter milik JavaScript. Jika berbicara mengenai IDE (integrated development environment), permasalahan ini pun tidak dapat diatasi begitu saja. IDE tidak memiliki kemampuan pengecekan dan pemberian peringatan jika terdapat kekeliruan penggunaan tipe data.
*/
