/*
Import dapat dilakukan dengan syarat :
    1. Mengimport function/method
    2. Sudah di export
Import dapat dilakukan dengan menulis kata kunci import kemudian diikuti oleh nama function/method/variable.
Yang kita import adalah default import karena pada file anotherfile.mjs nya myFunction dibuat sebagai default eksport maka ketika kita mengimpor dengan nama apapun, yang keluar adalah myFunction() karena defaultnya itu.
*/
import myFuntion from "./anotherfile.mjs"; // <- Mengimpor default export tidak perlu {} dan namanya boleh bebas. Kita dapat menggabungkan default dengan named, tetapi tidak baik dilakukan, dengan cara default, {named}
myFuntion();

/*
Selain default import, ada namanya named import, ketika mengimport function atau method dengan metode named import, kita diharuskan menulis nama yang sesuai dengan nama function/method yang di import dan menggunakan {}. Import dan Eksport dapat dilakukan dengan lebih dari satu function/method.
*/

import { name, age } from "./anotherfile.mjs";
console.log(name);
console.log(age);

/*
Cara lain menggunakan import adalah menggunakan import * ketika kita memiliki banyak variabel/method/funcion yang ingin di import
*/

import * as variable from "./anotherfile.mjs";
console.log(variable.name);
console.log(variable.age);

/*
as digunakan untuk memberikan nama alias pada function/method yang kita import, ini berguna untuk mengatasi nama function/method yang sama di kedua file yang berbeda.
*/

import { name as nameFromAnother } from "./anotherfile.mjs";
import { name as nameFromAnotherAgain } from "./anotherfileagain.mjs";
console.log(nameFromAnother);
console.log(nameFromAnotherAgain);

// .mjs artinya kita menggunakan ESModule
/*
TAMBAHAN UNTUK MENGGUNAKAN ESM PADA WEB
<script src="./esmodule.js" type="module">
kalo browser ga support
<script nomodule src="fallback.js"></script>

kalo mau inline
<script type="module">
  import App from "./app.js";
  console.log(App);
</script>
*/
