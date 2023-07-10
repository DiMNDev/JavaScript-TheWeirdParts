//Number
var a = 3;
console.log("a:", typeof a);
//String
var b = "Hello";
console.log("b:", typeof b);
//Object
var c = {};
console.log("c:", typeof c);
//Array
var d = [];
console.log("d:", typeof d); //Weird
console.log(Object.prototype.toString.call(d));
//Object
function Person(name) {
  this.name = name;
}

var e = new Person("Jane");
console.log("e:", typeof e);
console.log(e instanceof Person); //Returns a boolean; checks if "e" is an instance of "Person"

console.log(typeof undefined); //Makes sense

console.log(typeof null); //A bug; Returns Object

var z = function () {};
console.log(z); //returns function
