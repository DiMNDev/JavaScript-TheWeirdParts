//Primitive types are passed by value
var a = 3;
var b;

b = a;

console.log("a:", a, "b:", b);
a += 1;
console.log("a:", a, "b:", b);

//Objects are passed by reference(including functions)
var c = { greeting: "Hello" };
var d;

d = c;

console.log("c:", c, "d:", d);
c.greeting = "Hola"; //Mutate
console.log("c:", c, "d:", d);

//By reference(even as parameters)
function changeGreeting(obj) {
  obj.greeting = "Bonjour";
}

changeGreeting(d);
console.log("c:", c, "d:", d);

//The equals operator, used in this context, creates a new space
//in memory for the new value.
c = { greeting: "Howdy" };

console.log("c:", c, "d:", d);
