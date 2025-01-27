const myName: string = "TypeScript";

function greet(name: string) {
  console.log(`Hello, ${name}. My name is ${myName}`);
}

greet("JavaScript");

/*
Sangat mudah, ya. Ini memang tidak terlihat berbeda dengan Flow. Tentu ini akan menghemat energi kita jika ingin beralih dari Flow ke TypeScript. 

Kode JavaScript yang dibangun dengan TypeScript juga perlu diproses agar menjadi kode yang standar. Namun, jika Flow membutuhkan langkah pemeriksaan dan penghapusan, TypeScript mempermudah kita dengan sekali langkah selesai melalui penggabungan dua langkah tersebut. 

TypeScript tetaplah membutuhkan compiler untuk memproses kodenya, yaitu tsc. Ia akan memeriksa sekaligus menghasilkan berkas .js yang siap eksekusi.

Berikut adalah hasil compile dari tsc.

const myName = 'TypeScript';
 
function greet(name) {
  console.log(`Hello, ${name}. My name is ${myName}`);
}
 
greet('JavaScript');
*/
