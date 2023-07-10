var arr1 = new Array(); //Create a new array using the Array() function
var arr2 = []; //Create a new array using array literal notation

var arr3 = [
  1,
  false,
  {
    name: "Tony",
    address: "111 Main Street",
  },
  function (name) {
    var greeting = "Hello ";
    console.log(greeting + name);
  },
  "Hola!",
]; //Because JavaScript is dynamically typed, arrays can hold multiple
//different types at the same time, even functions.
console.log(arr3);
//We can access properties in an array by their index using bracket notation
var firstItem = arr3[0]; //Arrays use "zero based" indexing this
//means to access the first item index in an array we will be zero
console.log(firstItem);

arr3[3](arr3[2].name);
