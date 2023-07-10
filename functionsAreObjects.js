function greet() {
  console.log("Hi!");
}
//We can add properties to functions because functions are objects.
greet.language = "english";
console.log(greet);
console.log(greet.language);
