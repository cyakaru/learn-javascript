// Object
/*
    {key: 'value', 'key': 'value'} <- Properties
*/

const user = {
  name: "Moza Febina Lysia",
  age: 17,
  favorite: "Sleep",
};

console.log(user);

console.log(user.name); // <- Mengakses properties yang ada pada object, dalam hal ini name adalah properties yang ditampilkan
// user['key space']

// Menggunakan object destructuring untuk mengubah nilai properties pada object menjadi sebuah variabel
const { name, age, favorite } = user;
console.log(name, age, favorite);

/* Tanpa Object Destructuring
    const name = user.name;
    const age = user.age;
    console.log(name, age);
*/

user.name = "Shafwan Khairullah"; // <- Mengubah Value pada Object
delete user.favorite; // <- Menghapus key dan value pada Object

console.log(user.name);
console.log(user);
