/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

// Tulis kode di bawah ini

class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

function canEat(animal) {
  return {
    eat: () => {
      console.log(`${animal.name} sedang makan!`);
    },
  };
}

function canFly(animal) {
  return {
    fly: () => {
      console.log(`${animal.name} sedang terbang!`);
    },
  };
}

function myRabbit(name) {
  const animal = new Animal(name, 2, true);
  return Object.assign(animal, canEat(animal));
}

function myEagle(name) {
  const animal = new Animal(name, 4, false);
  return Object.assign(animal, canFly(animal));
}

const rabbit = myRabbit("Labi");
rabbit.eat();
console.log(rabbit);

const eagle = myEagle("Elo");
eagle.fly();
console.log(eagle);
