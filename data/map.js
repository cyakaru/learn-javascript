// Map
/* 
    Map menggunakan key value seperti pada object. Tetapi key-nya tidakh hanya string melainkan bebas tidak seperti obeject
    new Map([ [key, value] ])
*/

// Membuat Map

// Map Kosong

const newMap = new Map();
console.log(newMap);

// Map Isi

const map = new Map([
  ["nama", "awan"],
  ["umur", 17],
]);
console.log(map);

// Menambahkan nilai pada Map

const anotherMap = new Map();
anotherMap.set("nama", "Moza");
anotherMap.set(1, "satu");
console.log(anotherMap);

// Mengakses nilai pada map, bisa dengan method .get('key') yang mau diakses

console.log(anotherMap.get(1));

// Menghapus nilai pada map bisa dengan method .delete('key')

anotherMap.delete("nama");
console.log(anotherMap);
