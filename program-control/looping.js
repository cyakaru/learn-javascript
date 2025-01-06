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

for (let j = 0; (j = 100); ++j) {
  console.log("Aku Sayang Kamu");
}
