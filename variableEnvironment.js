function b() {
  var myVar;
  console.log(myVar);
}
function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();
//Each myVar declaration is different because they are defined
//in different execution contexts and as such will each return
//seperate values. One does not affect the other.
//Each myVar lives inside a different "variable environment"
