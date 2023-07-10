var person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

var logName = function (lang1, lang2) {
  console.log(`Logged: ${this.getFullName()}`);
  console.log(`Arguments: ${lang1} ${lang2}`);
  console.log("--------------");
}.bind(person);

//By using bind we can copy a function and "target" the object we want
//to reference as  "this".

var logPersonName = logName.bind(person);

logPersonName();
//We can use call to call a funtion, the first parameter is like "bind"
//where we specify the "this", followed by the rest of the parameters
//we are passing to the function
logName.call(person, "en", "es");
//Apply is very similar to ".call" except it expects to recieve an array
//of parameters as the second argument.
logName.apply(person, ["en", "es"]);
//Here we are running an anonymous function using "person" as our this.
//This gives us access to the function "getFullName()" that lives inside
//the person object.
(function (lang1, lang2) {
  console.log(`Logged: ${this.getFullName()}`);
  console.log(`Arguments: ${lang1} ${lang2}`);
  console.log("--------------");
}).apply(person, ["en", "es"]);

//Function borrowing
var person2 = {
  firstName: "Mary",
  lastName: "Jane",
};
//Using ".apply()" here we can "borrow" the function "getFullName()"
//from our person object and give it to our person2 object.
//
console.log(person.getFullName.apply(person2, ["en", "es"]));

//Function currying
function multiply(a, b) {
  return a * b;
}

function multiplyBiTwo(b) {
  var a = 2;
  return a * b;
}
//"multiplyBiTwo(b)" and "multiplyByTwo(b)" essentially have the same behavior
//by using bind we can accomplish the same task here and save ourselves some
//lines of code.
//When we pass "this" to the function it is refering to
var multiplyByTwo = multiply.bind(this, 2);
var multiplyByThree = multiply.bind(this, 3);
var four = multiply(4, 1);
var eight = multiplyByTwo(4);
var twelve = multiplyByThree(4);

console.log(four);
console.log(eight);
console.log(twelve);
