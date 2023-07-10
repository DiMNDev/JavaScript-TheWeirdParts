var person = {
  firstName: "Default",
  lastName: "Default",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

var john = {
  firstName: "John",
  lastName: "Doe",
};

//Don't do this EVER! Just for demonstration only!!
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstName);

var jane = {
  firstName: "Jane",
};

jane.__proto__ = person;
console.log(jane.getFullName());

//Protoyping allows us to chain objects together to share, or inherit,
//properties and methods.
