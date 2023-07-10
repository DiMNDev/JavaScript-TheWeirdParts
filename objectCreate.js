//This is poly fill code, if Object.create doesn't work in context
//then this function will run giving us the usablity of Object.create
//where Object.create is not built in
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error(
        "Object.create implemenation " + "only accepts the first parameter"
      );
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}
//This is our "blue-print", template for our objects structure
var person = {
  firstName: "Default",
  lastName: "Default",
  greet: function () {
    return `Hi, ${this.firstName} ${this.lastName}`;
  },
};
//We can create an object using "Object.create"
var John = Object.create(person);
//We can change and assign an objects properties and methods
//using the . operator and bracket notation
John.firstName = "John";
John["lastName"] = "Doe";
console.log(John.greet());
