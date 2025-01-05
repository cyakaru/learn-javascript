// Set
/*
    Set adalah tipe data yang unik karena tidak memiliki key value dan tidak dapat memiliki data yang duplikat
*/

// Cara membuat Set

const set = new Set([1, 2, 3]);
console.log(set);

// Cara menambahkan nilai pada set, menggunakan( method .set(nilai yang ingin ditambahkan)

const newSet = new Set();
newSet.add(1);
newSet.add(2);
console.log(newSet);

// Nilai set tidak dapat duplika
newSet.add(1);
console.log(newSet);

// Mengakses nilai pada set, dapat digunakan metode looping

for (const number of newSet) {
  console.log(number);
}

// Menghapus set dapat menggunakan method .delete(nilai yang ingin di hapus) karena set tidak memiliki key-value

newSet.delete(1);
console.log(newSet);
