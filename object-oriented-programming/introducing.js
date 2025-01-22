// Cara membuat Object dan Class
/*
JavaScript bukanlah bahasa pemrograman berbasis class sehingga JavaScript tidak mengenal class. 
Meskipun tidak mengenal class, prinsip OOP tetap dapat diterapkan. 
Constructor function adalah cara yang digunakan untuk membuat object dan class sebelum adanya ES6. 
Cara membuat object dan class menggunakan constructor function dapat dilihat pada contoh berikut.
*/
// function Person(name, age) {
//   this.name = "Moza";
//   this.age = 17;
// }

// Person.prototype.eat = function () {
//   console.log(`${this.name} is eating.`);
// };

/*
Kode di atas merupakan contoh membuat blueprint dari entitas person. JavaScript bukan bahasa pemrograman berbasis class, melainkan bahasa pemrograman berbasis prototype (prototype-based language). Oleh karena itu, Anda melihat penggunaan prototype pada contoh kode di atas. 

Prototype adalah salah satu konsep fundamental dalam JavaScript yang memungkinkan pewarisan sifat dan method antar object. 
Semua object di JavaScript memiliki properti tersembunyi bernama [[Prototype]] yang mengarah ke object prototype lain atau null.

Catatan
Properti dari sebuah object yang merujuk ke prototype-nya tidak disebut prototype. Namanya tidak standar antar JavaScript runtime, tetapi dalam praktiknya semua browser menggunakan nama __proto__.
Cara standar untuk mengakses prototype sebuah object adalah dengan metode Object.getPrototypeOf().

Kemudian, untuk membuat object person dengan constructor function dapat dilakukan seperti berikut.
*/
// const person1 = new Person("Alice", 30);
// const person2 = new Person("Bob", 25);

// console.log(person1.name);
// console.log(person2.name);

// person1.eat();
// person2.eat();

/*
Jangan heran, kalau kita dapat membuat sebuah object dari sebuah function di JavaScript, itu merupakan kemampuan dari function JavaScript. Perlu diingat bahwa function tersebut berbeda dengan function biasa karena ia adalah constructor function. Selain itu, kita tidak dapat membuat object dari arrow function karena ia tidak dapat dipanggil dengan keyword new.
Catatan
Biasanya penamaan constructor function ditulis dengan awalan huruf besar untuk membedakan dengan penamaan fungsi biasa.
*/

// ES6 Class
/*
Cara yang lebih modern untuk membuat object dan class adalah menggunakan ES6. ES6 sudah mendukung class sehingga membuat JavaScript mirip dengan bahasa lain yang berbasis class seperti Java, C++, dan C#.
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

const person1 = new Person("Moza");
console.log(person1.name);
person1.eat();

/*
Dengan adanya ES6, penerapan salah satu pilar OOP akan lebih mudah terutama bagi Anda yang merupakan programmer Java, C++, dan C#. Selain itu, ES6 Class juga memungkinkan kita untuk menggunakan method super untuk memanggil constructor SuperClass (akan kita bahas di materi berikutnya).

Walaupun di JavaScript sudah mendukung class, hal itu tidak mengubah JavaScript menjadi bahasa pemrograman berbasis class. Faktanya, sintaks class di JavaScript hanyalah syntactic sugar atau cara alternatif dalam mendefinisikan constructor function. Untuk membuktikan hal tersebut, kita bisa mengecek tipe class melalui operator typeof.
*/

console.log(typeof Person);
// Dapat terlihat bahwa outputnya adalah function.
