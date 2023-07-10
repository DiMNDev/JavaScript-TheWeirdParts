//We are printing out the "this" in the global scope
console.log(this);
//We are printing out the window object directly
console.log(window);
//Both point to the same thing.

var a = "Hello World!";

function b() {
  console.log("Called B!");
}
b();
console.log(a);
