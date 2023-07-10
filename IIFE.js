//I.I.F.E. stands for Immediatley Invoked Function Expression

function greet(name) {
  //Using a Function Statement
  console.log(`Hello ${name}`);
}
greet("Josh");

//Using a Function Expression
var greetFunc = function (name) {
  console.log(`Hola ${name}`);
};
greetFunc("Josh");

//Using an Immediatley Invoked Function Expression (IIFE)
var greeting = (function (name) {
  console.log(`Bonjour ${name}`);
})("Josh");
var greeting1 = (function (name) {
  return `Aloha ${name}`;
})("Josh");
console.log(greeting1);
//console.log(greeting1());
//The line above returns an error because it's automatically
//invoked and has a return property we have now assigned greeting1
//the value, in this case a string, from the return property.

//We can also write an IIFE anonymously like this to create and
//execute a function on the fly:
(function (name) {
  var greeting = "Hello";
  console.log(`${greeting} ${name}`);
})("Jill");
(function (name) {
  var greeting = "Hello";
  console.log(`${greeting} ${name}`);
})("Sally"); //The second set of parenthesis that triggers execution
//of the function can be inside or outside the main parenthesis
//VS Code(maybe prettier) defaults to outside the main parenthesis
