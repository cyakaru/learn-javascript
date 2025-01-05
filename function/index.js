/*
    function berfungsi sebagai pembungkus kode yang dapat dijalankan ketika kita menginginkannya
    parentheses adalah parameter-parameter yang diperlukan pada function body
    parameter dalam function adalah input data yang digunakan pada function itu
    argument pada function adalah nilai yang dimasukkan ke dalam parameter
    return value berfungsi untuk mengembalikan nilai yang dihasilkan pada function dan nilai tersebut dapat disimpan pada variabel
    first class citizen pada function berarti function dapat diperlakukan layaknya variabel dan dapat digunakan pada function lain
*/

function convertCelciusToFahrenheit(temperature = 0) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;

  console.log(temperatureInFahrenheit);
}

convertCelciusToFahrenheit(10);
convertCelciusToFahrenheit();

const functionExpression = function (a, b) {
  return a + b;
};

const eum = 2;
const mue = 3;
console.log(functionExpression(eum, mue));

// arrow function

const arrowFunction = (message) => {
  return `Halo ${message}`;
};

const message = "Awan";
console.log(arrowFunction(message));
