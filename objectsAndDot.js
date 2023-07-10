var Person = new Object();

Person["firstName"] = "Josh";
Person["lastName"] = "Arnold";

var firstNameProperty = "firstName";

console.log(Person);
//Accessing firstName using bracket notation
console.log(Person[firstNameProperty]);
//Accessing firstName using dot notation
console.log(Person.firstName);
//We can also add new properties using dot notation
Person.address = new Object();
Person.address.street = "111 Main Street";
Person.address.city = "New York";
Person.address.state = "NY";

console.log(Person.address.street);
console.log(Person.address.city);
console.log(Person["address"]["state"]);
//NOTE: if our property we are trying to access has a space in the name
//We will have to use bracket notation to access it.
