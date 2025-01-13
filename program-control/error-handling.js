/*
    Error handling dapat mencegah crash pada program ketika terjadi error yang disebabkan oleh kesalahan syntax atau error lainnya.
*/

/**
    Saat terjadi error sinyal exception (pengecualian) akan bangkit, cara lain untuk membuat exception adalah dengan menggunakan keyword throw untuk membuat sebuah error

    throw <object error>

    javascript memiliki built-in constructor untuk standar error meliputi Error, SyntaxError dan sebagainya. contoh

    const error = new Error('Terjadi Error')
    console.error(error)

    membuat error digunakan agar ketika terjadi kesalahan pada program, tidak mengalami crash karena errornya sebagai penanganan atas error tersebut.
    
    contoh =

    ada program aplikasi pembayaran, ketika yang dibayar malah kurang dari harga barang, maka akan terjadi error dengan keterangan pembayaran kurang.
 */

const price = 10000;
const paid = 10000;

if (price > paid) {
  throw new Error("Pembayaran Kurang");
}

// Catching Error (Menangkap Error)

/*
    Try - Catch
    Try-catch merupakan cara yang dimiliki JavaScript untuk menangani error. Try-catch memiliki dua blok utama yaitu try dan catch. Try merupakan blok kode yang akan menangani error, sedangkan catch merupakan blok kode yang dibangkitkan ketika terjadi error di dalam blok try.

    try {
    
    } catch (err <-- variable apda try) {
     
    }

    blok catch akan diabaikan ketika tidak terjadi error pada blok try
    contoh =
*/

try {
  console.log("Halo");
  throw new Error("Hi"); // <-- blok pada catch akan dijalankan karena terdapat error pada blok try
} catch (Error) {
  console.log("YO");
} finally {
  console.log("TAK PEDULI APAPUN"); // <-- blok ini akan selalu dieksekusi tanpa memedulikan apakah pada try maupun catch tidak terdapat error
}
