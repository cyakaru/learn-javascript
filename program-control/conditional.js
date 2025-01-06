// Conditional flow adalah cara untuk menentukan apakah kode dieksekusi atau dilewatkan. Jika suatu kondisi terpenuhi, kode akan dieksekusi dan kode yang lainnya akan diabaikan. Kondisi ini ditentukan dari inputan yang diberikan oleh pengguna.

// Conditional flow terdiri dari If Statement dan Switch Case

// If Statement
/*
    if (expression) {
        statement
    }
*/
const baik = true;

console.log("Implementasi If Statement...");

if (baik) {
  console.log("Kamu yang terbaik!");
}

// If Statement akan mengeksekusi blok apabila kondisinya terpenuhi (true)
// If Statement juga dapat menangani cabang kondisi lainnya menggunakan else dan jika lebih dari 2 dapat menggunakan else if

let nilai = 40;

if (nilai >= 90) {
  console.log("Kamu mendapatkan A");
} else if (nilai >= 80) {
  console.log("Kamu Mendapatkan B");
} else if (nilai >= 70) {
  console.log("Kamu Mendapatkan C");
} else {
  console.log("Kamu Tidak Lulus!");
}

// Selain itu, If Statement juga dapat diimplementasikan dengan Ternary Operator

let harga = 20000;
let penggunaMembership = true;
let diskon = penggunaMembership ? 0.1 : 0;

console.log(
  `Sebagai pengguna membership, kamu mendapatkan diskon sebesar ${
    harga * diskon
  }`
);

// Switch Case
// Switch statement adalah control flow statement yang mengevaluasi expression terhadap beberapa kasus. Switch dapat menggantikan beberapa pengecekan kondisi yang dilakukan oleh if.

/*
    switch (expression) {
        case condition:
            statement
        break;
        
        default:
    }

    Nilai setelah case diisi kondisi yang mau di cek oleh switch case, statement adalah perintah yang dijalankan ketika memenuhi syarat pada case. Break berfungsi untuk menghentikan proses pengecekan ketika sudah sesuai kondisi yang diperlukan. Default adalah nilai yang akan ditampilkan ketika semua case tidak terpenuhi.
*/

let buah = "Apel";

switch (buah) {
  case "Apel":
    console.log("Ini Adalah Buah Apel");
    break;
  case "Nanas":
    console.log("Ini Adalah Buah Nanas");
    break;
  default:
    console.log("Ini Adalah Buah");
}
