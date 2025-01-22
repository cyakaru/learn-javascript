/*
Import dapat dilakukan dengan syarat :
    1. Mengimport function/method
    2. Sudah di export
Import dapat dilakukan dengan menulis kata kunci import kemudian diikuti oleh nama function/method/variable.
Yang kita import adalah default import karena pada file anotherfile.mjs nya myFunction dibuat sebagai default eksport maka ketika kita mengimpor dengan nama apapun, yang keluar adalah myFunction() karena defaultnya itu.
*/
import myFuntion from "./anotherfile.mjs";
myFuntion();

/*
Selain default import, ada namanya named import, ketika mengimport function atau method dengan metode named import, kita diharuskan menulis nama yang sesuai dengan nama function/method yang di import dan menggunakan {}. Import dan Eksport dapat dilakukan dengan lebih dari satu function/method.
*/

import { name, age } from "./anotherfile.mjs";
console.log(name);
console.log(age);
