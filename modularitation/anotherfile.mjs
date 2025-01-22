/*
Export adalah keyword yang kita gunakan untuk melabeli suatu function/method/variable agar dapat diakses dari luar modul saat ini. Export terdiri dari dua jenis, yaitu default export dan named export.
*/

// Default Export
// Default Export adalah metode yang mengexport function / method dsb hanya satu modul. Digunakana agar tidak bentrok, dan disarankan hanya satu modul saja.
export default function myFuntion() {
  console.log("Ini adalah function pada anotherfile.mjs");
}

// Named Export
// Named Export Setelah Deklarasi
const name = "Awan";
const age = 17;

export { name, age };

// Named Export Sebelum Deklarasi
export const school = "SMK Negeri 2 Dumai";
