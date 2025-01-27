/*
Salah satu upaya untuk meningkatkan kehati-hatian kita terhadap dynamic type adalah menyediakan dokumentasi kode. Dokumentasi mirip dengan kita memberi sebuah instruksi atau deskripsi mengenai tata cara penggunaan kode. Kita akan menggunakan JSDoc sebagai alat dokumentasinya.

JSDoc adalah sebuah alat untuk menghasilkan dokumentasi kode JavaScript. Untuk memberikan deskripsi, kita akan memanfaatkan fitur komentar langsung pada sumber kodenya. Lebih tepatnya, komentar disajikan sebelum kode itu sendiri. Komentar ini sebut saja JSDoc comment.

JSDoc memiliki prosedur yang perlu kita ikuti sebelum memulai mendokumentasikan kode. Hal ini karena ada JSDoc parser yang akan menganalisis kode kita. Kerennya, JSDoc dapat menghasilkan dokumentasi dalam bentuk halaman web, lo. Nanti kita akan lihat.

Setiap JSDoc comment harus dimulai dengan /**. Komentar yang menggunakan /*, /***, atau lebih dari tiga bintang (*) tidak akan diproses oleh JSDoc.
*/

// Penerapan JSDoc untuk menambahkan deskripsi pada function
/**
 * Say hello to world
 */
function greet() {
  console.log("Hello World");
}

/*
JSDoc memiliki JSDoc tag yang dapat memberikan informasi lebih terkait function. Misalnya, sebuah function memiliki beberapa parameter dan return value. Kita bisa memberikan informasi dalam JSDoc comment tentang itu.
*/

/**
 * Get add operation of two numbers.
 *
 * @param {number} numA - The first numeric operand
 * @param {number} numB - The second numeric operand
 * @returns {number} Sum of numA and numB
 */
function add(numA, numB) {
  return numA + numB;
}

/*
JSDoc tag diawali dengan simbol @ dan diikuti dengan nama tag-nya. Kita melihat ada dua tag pada contoh kasus di atas.

@param: menyediakan nama, tipe data, dan deskripsi untuk function parameter.
@returns: menginformasikan nilai yang akan function keluarkan.

Ada banyak sekali tag yang tersedia untuk menghasilkan dokumentasi terbaik. Tidak hanya untuk function, JSDoc juga mampu mendokumentasikan class, object, import-export, dan sebagainya. Bahkan, JSDoc membaginya menjadi dua, yaitu block dan inline.

JSDoc dapat menghasilkan dokumentasi dalam bentuk halaman web. Hal yang perlu dicatat adalah kita akan membutuhkan binary jsdoc dan mengeksekusinya melalui terminal. Pemanfaatan fitur ini harus melibatkan package manager, seperti npm.
*/
