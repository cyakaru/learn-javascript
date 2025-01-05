// Rest Operator
/*
    Rest Operator digunakan pada function agar nilai parameter yang dimasukkan ke function akan berubah menjadi array
    denga syntax (...Parentheses)
*/

function newFunc(...parameter) {
  console.log(parameter);
}

newFunc(1, 2, 3);

// Jika ada parameter lain sebelum Rest Operator, maka argumen pada nilai tersebut tidak masuk ke array pada rest operator

function name(param, ...params) {
  console.log(param);
  console.log(params);
}

name(4, 5, 6); // 4nya tidak masuk ke rest operator karena ada parameter biasa sebelum rest operator

// Karena rest operator menangani nilainya berupa array, maka method-method pada array juga dapat digunakan disini, contohnya .length (mengetahui jumlah index nilai pada array)

function newFuncAgain(...rest) {
  console.log(rest.length);
  console.log(...rest);
}

newFuncAgain(1, 2, 3);

// Selain pada function, rest operator juga dapat digunakan pada destructuring array untuk mengambil sisa elemen pada array tersebut, beriktu contohnya

const number = [1, 2, 3, 4, 5, 6];
const [pertama, kedua, ...sisanya] = number;

console.log(pertama);
console.log(kedua);
console.log(sisanya);
