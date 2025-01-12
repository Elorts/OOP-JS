'use strict';
/*
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
/*
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

*/
/*
console.log('* Object.create /////// *');

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

steven.name = 'Steven';
steven.birthYear = 1889;
steven.calcAge();

const felix = Object.create(PersonProto);
felix.init('Felix', 1925);
felix.calcAge();
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
*/
/*
console.log('@@@@@@@@@@@@@@@@@@@@@ coding challenge @@@@@@@@@');

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Make: ${this.make}, and speed: ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`Make: ${this.make}, and speed: ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
ford.accelerate();

ford.speedUS = 120;

console.log(' speed in mph: ', ford.speed);

// ford.accelerate();
// ford.accelerate();

// ford.brake();
*/

/*
console.log('@@@@@@ Inheritance Between "Classes": Constructor Functions');

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calAge = function () {
  console.log(1900 + this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I'm studying ${this.course}`);
};

const mike = new Student('Mike', 2058, 'Computer Science');
console.log(mike);

mike.introduce();
mike.calAge();

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike.__proto__);
Student.prototype.constructor = Student;
console.log(mike.__proto__);
console.dir(Student.prototype.constructor);
*/
//////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
console.log('Coding challenge 3 ++++++++++++++++++');

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge *= 0.99;
  console.log(
    `Tesla going at ${this.speed}km/h, with a charge of ${this.charge}`
  );
};

EV.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Speed after braling: ${this.speed}`);
};

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(100);
console.log(tesla);
*/

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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Allways needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I'm studying ${this.course}`);
  }
}

const maryte = new StudentCl('Maryte Melninkaite', 2020, 'KPSS History');
maryte.introduce();
maryte.calcAge();
