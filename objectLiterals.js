var John = {
  firstName: "John",
  lastName: "Smith",
  address: {
    street: "111 Main Street",
    city: "New York",
    state: "NY",
  },
};

function greet(person) {
  console.log(`Hi, ${person.firstName}`);
}

greet(John);
//Creating an object on the fly
greet({ firstName: "Mary", lastName: "Jane" });
