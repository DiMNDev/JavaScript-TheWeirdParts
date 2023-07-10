//Statements: When code states something
//Expressions: When code produces a value
//Functions are hoisted where as variables are not.
//Because of this we can call "greet()" before the function is defined and it will run
//If we were to try to call "anonymousGreet()" before it is defined
//We will recieve an undefined error because of the way JavaScript
//handles functions and variables in memory.
greet();
function greet() {
  //Function statement "hoisted" into memory
  console.log("Hi!"); //This is a Function Statement because it stats what the function should do and does return anything.
}

//Function expression assigned to a variable
var anonymousGreet = function () {
  console.log("Hello!"); //This is a Funtion Expression because it returns a value
};
anonymousGreet();

//Pass an object as a parameter
function log(a) {
  console.log(a);
}

//Create an object literal? on the fly
log({ greeting: "Hello!" });

//Pass a function as a parameter
function log2(a) {
  a();
}
//Create a function expression at callsite on the fly
log2(function () {
  console.log("Hi!");
});
