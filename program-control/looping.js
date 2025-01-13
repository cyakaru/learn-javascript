/*
    Looping adalah proses mengeksekusi kode yang sama berulang-ulang kali
    Penggunaan Looping ada banyak, misal for loop, for in, for of, while dan do-while
*/

// For adalah cara paling umum untuk melakukan looping di javascript
/*
    Penggunaan for loop

    Struktur
    for (variabel awal; test kondisi; increment) { (increment adalah penambahan dalam setiap proses looping yang dilakukan, misal loop pertama 1 selanjutnya 2 dan seterusnya)
        lakukan sesuatu ketika looping
    }

    Variabel awal adalah nilai variabel sebelum looping dilakukan. Test kondisi adalah evaluasi dari looping, jika bernilai false, looping akan berhenti. Increment adalah nilai variabel yang bertambah setiap looping dilakukan.

    Test kondisi yang mengontrol program looping.
*/

for (let i = 0; i < 5; ++i) {
  console.log(`Angka ke-${i} adalah ${i}`);
}

// for (let j = 0; (j = 1); ++j) {
//   console.log("Aku Sayang Kamu");
// }

/*
  Penggunaan for in (biasa digunakan pada object)
  For in banyak digunakan untuk pengulangan pada object karena ia dapat melakukan iterasi ke seluruh data di dalam objek. Bahkan, ia juga dapat melakukan iterasi ke properti inheritance dari object seperti length.

  const nama_variabel = objek;
  for (const nama_variabel_pada_for_in in nama_variabel) {
    statement (lakukan sesuatu padaa loop ini)
  }

  For in akan melakukan perulangan item yang ada di dalam object (pada contoh object). Pada contoh di bawah, for akan melakukan looping semua item yang ada di dalam objek person. For in akan memperhatikan key-value
*/

const object = { nama: "Shafwan", kelas: 12 };

for (const value in object) {
  console.log(value);
  console.log(object[value]);
}

/*
For of lebih sederhana dan tidak perlu memikirkan key-value / propertinya. Biasanya digunakan pada array.
Dengan for of datanya bisa kita dapatkan langsung tanpa menambahkan indeks atau nama propertinya seperti contoh di atas. Sintaksnya lebih ringkas karena kita hanya perlu memanggil variabel item. Variabel item merupakan sebuah variabel yang digunakan untuk menampung element dari array. For of dapat digunakan pada object yang bisa diiterasi seperti arrays, strings, sets, dan maps.
*/

const names = ["Awan", "Moza"];

for (const item of names) {
  console.log(item);
}
