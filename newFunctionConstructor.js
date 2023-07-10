function Person(firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;
  console.log("Function Invoked!");
}
//We use prototypes to help save on memory space. If we were to
//define every property and method inside the "Function Constructor"
//each object will then become bloated with duplicated code in memory.
//By using prototypes we can instead attach a "reference" to a method
//or property and therefore can keep from repeating ourselves.
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.getFormalName = function () {
  return `${this.lastName}, ${this.firstName}`;
};

//When we use the "new" keyword, the engine creates a new Empty
//Object and places it in memory. The engine will then invoke
//the function in which case the "this" property will point to
//the new object, which will then assign the properties and methods
//that are defined. We can pass parameters to this function to
//assign it values and functions when it is invoked.
var John = new Person("John", "Doe");
console.log(John);
var Jane = new Person("Jane", "Dee");
console.log(Jane);
console.log(Jane.getFullName());
console.log(Jane.getFormalName());
