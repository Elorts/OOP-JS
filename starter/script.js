'use strict';

// Construction functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const deividas = new Person('Deividas', 2000);
console.log(deividas);

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
