// Spread Operator
/*
    Spread Operator digunakan untuk menyebarkan / menyalin nilai yang ada pada object dan array dengan sintaks (...)
    SO dapat digunakan untuk menggabungkan dan menyalin object maupun array
*/

// Contoh penggunaan pada Object

const obj1 = { nama: "Awan" };
const obj2 = { nama: "Moza" };
const newObj = { ...obj1, ...obj2 };
console.log(newObj);

const coppiedObj = { ...obj2 };
console.log(coppiedObj);

// Contoh penggunaan pada Array

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = [...array1, ...array2];
console.log(newArray);

const coppiedArray = [...array2];
console.log(coppiedArray);

// Ingat Array dapat menyimpan Object

const arrayWithObject = [
  {
    name: "Awan",
    age: 17,
  },
  {
    name: "Moza",
    age: 17,
  },
];
console.log(arrayWithObject);

console.log(arrayWithObject[1]);

const coppiedArrayWithObject = [...arrayWithObject];
console.log(coppiedArrayWithObject);
