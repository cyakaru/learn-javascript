// Polymorphism
/*
Polymorphism berasal dari bahasa Yunani yang memiliki arti secara harfiah yaitu memiliki banyak bentuk. Polymorphism merupakan konsep di mana suatu entitas menjadi SuperClass untuk mewariskan property atau method ke SubClass. 

Polymorphism berhubungan erat dengan pewarisan. Sebelumnya kita memiliki SuperClass Smartphones yang memiliki property color, brand, model dan method charging. Kemudian kita memiliki SubClass yang implementasinya berbeda tergantung dengan jenisnya seperti Android dan iOS.

Kini, bentuk implementasi dari Smartphones berbeda untuk setiap jenis. Inilah yang disebut dengan polymorphism. Lalu, bedanya apa dong dengan pewarisan? Bedanya terdapat pada implementasi method yang diubah. Untuk mengubah implementasi method tersebut, terdapat konsep yang disebut dengan overriding.

Kini, bentuk implementasi dari Smartphones berbeda untuk setiap jenis. Inilah yang disebut dengan polymorphism. Lalu, bedanya apa dong dengan pewarisan? Bedanya terdapat pada implementasi method yang diubah. Untuk mengubah implementasi method tersebut, terdapat konsep yang disebut dengan overriding. 

Overriding Constructor
Constructor adalah method khusus yang dipanggil ketika instance class dibuat. Misalnya, ketika membuat instance class dengan keyword new, constructor akan terpanggil.
const android = new Android()

Bagaimana ketika kita butuh untuk menambahkan property baru pada SubClass Android atau iOS? Nah, kita dapat melakukan overriding constructor, caranya sesederhana mendefinisikan ulang constructor-nya seperti contoh berikut.

*/

class Smartphones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }
  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class Android extends Smartphones {
  constructor(color, brand, model, device) {
    super(color, brand, model);
    this.device = device;
  }
  charging() {
    super.charging();
    console.log("Android have Fast Charging features.");
  }
  SplitScreen() {
    console.log("Android have a Split Screen features");
  }
}

class iOS extends Smartphones {
  AirDrop() {
    console.log("Iphone have a AirDrop for sharing features");
  }
}

const xiaomi = new Android(
  "Black",
  "Xiaomi",
  "Redmi Note 13 5G",
  "Mobile Phone"
);
const iPhone = new iOS("White", "Apple", "Iphone 13");

xiaomi.charging();
xiaomi.SplitScreen();

iPhone.charging();
iPhone.AirDrop();

/*
Karena Android tidak hanya bisa dijalankan di smartphone, tetapi juga di perangkat lain seperti tablet atau smart TV, kita menambahkan properti baru yaitu device di dalam constructor SubClass Android. Properti device ini ditambahkan untuk memenuhi kebutuhan penamaan perangkat yang menjalankan sistem operasi Android.

Ketika melakukan overriding constructor, kita wajib memanggil method super() di dalam constructor. Hal ini digunakan untuk menandakan apa saja property yang diturunkan dari SuperClass. Di contoh, property yang diturunkan adalah color, brand, dan model. Jika tidak memanggil method super(), akan terjadi error Referrence Error.
*/

/*
Overriding Method
Selain kita bisa mengubah dan menambahkan property di constructor, kita juga dapat mengubah implementasi pada method yang diturunkan dari SuperClass. Konsep ini disebut dengan overriding method. Overriding method memungkinkan SubClass untuk membuat implementasi spesifik dari metode yang sudah ada di SuperClass.

Misalkan, kita ingin mengubah method charging() yang diturunkan dari SuperClass di SubClass Android karena Android sudah mendukung untuk fast charging. Caranya adalah dengan menulis ulang method yang ingin kita override. Perhatikan contoh berikut ini.

charging() {
    console.log(`${this.model} can fast charge`)
}

Kita menulis ulang method charging() dengan implementasi spesifik di SubClass Android. Berbeda dengan overriding constructor, overriding method tidak wajib untuk menulis method super(). Namun, jika Anda butuh untuk memanggil method charging() dari SuperClass bersamaan dengan method charging yang sudah di-override, hal itu dapat dilakukan dengan memanggil method super() seperti contoh berikut.

charging() {
    super.charging();
    console.log(`${this.model} can fast charge`)
}

versi bagusnya liat kode di atas tadi
*/
