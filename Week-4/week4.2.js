// Create an object called Teacher derived from the Person class, 
// and implement a method called teach which receives a string calleds ubject, and prints out:


const Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

const Teacher = function () {};
Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

const him = new Teacher();
him.initialize("Walter White", 56);
him.teach("Chemistry"); 




