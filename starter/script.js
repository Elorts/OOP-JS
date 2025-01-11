'use strict';

// Construction functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const deividas = new Person('Deividas', 2000);
console.log(deividas);

Person.hey = function () {
  console.log('Hey there 🌛');
};

Person.hey();
// deividas.hey(); <- not wrking!!!

// 1. New empty {} object created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const mikas = new Person('Mikas', 3000);

console.log(mikas);

console.log(mikas instanceof Person);

console.log('************* Prototypes <220>***********');

//console.log(Person.prototype);

Person.prototype.calAge = function () {
  console.log(1900 + this.birthYear);
};

deividas.calAge();

mikas.calAge();

//console.log(deividas.__proto__);

console.log(Person.prototype.isPrototypeOf(deividas));

console.log(
  '************* Prototypal inheritance and delegation <220>***********'
);

//theoretical stuff

console.log(
  '************* Prototypal inheritance on built-in objects <220>***********'
);

console.log(deividas.__proto__);
console.log(Person.prototype.constructor);

const arr = [3, 5, 5, 9, 9, 8, 5];

Array.prototype.customMethod = function () {
  // Creating mathod inside object
  return [...new Set(this)];
};

console.log(arr.customMethod());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

console.log('* Coding Challenge *');

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();

mercedes.brake();
mercedes.brake();
mercedes.brake();

console.log('* ES6 Classes /////// *');

// expressions
//const PersonCl = class {};

// class declarations
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 30;
  }

  // set property that already exists

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('Not a full name!');
  }

  // instance method
  get fullName() {
    return this._fullName;
  }

  // static metod
  static hey() {
    console.log('Hey there 🌛');
  }
}

const walter = new PersonCl('Walter Green', 1919);

const petras = new PersonCl('Petras Matras', 1915);
console.log(petras.__proto__);
petras.calcAge();
console.log('age:      ', petras.age);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

PersonCl.hey();

petras.greet();

// Classes:
// 1. not hoisted
// 2. first class citizens
// 3. executed in strict mode

console.log('* Gettters and Setters /////// *');

const account = {
  owner: 'deividas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

console.log('* Static metod /////// *');

console.log(Number.parseFloat('11A'));
