var greet = "Hello!";
var greet = "Hola!";

console.log(greet);

var english = {};
var spanish = {};

english.greet = "Hello!";
english.greetings.greet = "Hi!"; //We can NOT chain to create two levels
//It will result in an error "cannot set properties of undefined",
//This is because greetings is undefined.
spanish.greet = "Hola!";

console.log(english);
