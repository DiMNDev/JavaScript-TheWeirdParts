Array.prototype.newFunction = "Hi!";

var arr = ["John", "Jack", "Jill"];

//Avoid using "for-in" with arrays
for (index in arr) {
  //This log will include our the "newFunction" prototype,
  //we might not want this effect
  console.log(`${index}: ${arr[index]}`);
}
