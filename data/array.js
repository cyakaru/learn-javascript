// Array
/*
    Array merupakan struktur data yang dapat menyimpan data secara terurut karena nilainya memiliki pola indeks. Begitu pula ketika kita mengaksesnya, kita akses menggunakan pola indeks yang ada pada datanya. Data yang berada di dalam Array disebut element. Array dapat menyimpan tipe data apapun seperti String, Number, bahkan Object. Array juga merupakan sebuah object.
*/

const array = [1, 2];
console.log(typeof array);

// Cara membuat Array

// Object Destructuring
const arrayBaru = new Array();
const arrayLagi = new Array(5);

// Array.from
const arrayBaruu = Array.from("foo");
console.log(arrayBaruu);

// Array.from yang digunakan untuk menyalin Array
const arrayLagii = new Array("Awan", "Iwan", "Uwan");
const arrayFromLagii = Array.from(arrayLagii);
console.log(arrayFromLagii);

// Array literal
const newArray = [1, 2, 3, 4, 5];
console.log(newArray);

// Mengakses Array
/*
    Untuk mengakses Array dapat dengan mengetikkan variable Array lalu nomor indeksnya (dimulai dari 0 dengan kurung siku)
*/

console.log(newArray[4]);

// Manipulasi nilai Array

// Menggunakan Indexing

newArray[0] = 10;
console.log(newArray);

// Menggunakan push = untuk menambahkan element array di baris akhir

newArray.push(10);
console.log(newArray);

// Menghapus Array

delete newArray[0];
console.log(newArray);

// Menggunakan method Splice, (index nomor, berapa banyak yang mau dihapus)
newArray.splice(1, 1);
console.log(newArray);

// Menggunakan pop (yang pertama) dan shift (yang terakhir)

const array_baru = [5, 10, 15];
array_baru.pop();
array_baru.shift();
console.log(array_baru);

// Array destructuring untuk mengubah nilai indeks pada array

const arrayDestructuring = ["Halo", "Baiklah"];
const [sapaan, oke] = arrayDestructuring;
console.log(sapaan);

// Method pada array

// Membalikkan Nilai array (reverse)
const methodArray = [1, 2, 3, 4, 5, 6];
methodArray.reverse();
console.log(methodArray);

// Mengurutkan nilai array (sort)
methodArray.sort();
console.log(methodArray);

const eum = ["apple", ...["banana"]];
console.log(eum);

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
