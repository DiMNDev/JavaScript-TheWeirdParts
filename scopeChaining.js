function b() {
  console.log(myVar); //Logs 1
  //This is because we are accessing the variable in the global scope
  //Variables defined inside the global scope are accessible
  //inside functions because the functions themselves reside/live
  //inside the global scope.
  //If the function cannot find the variable inside the local variable
  //enviornment, JavaScript will look to the global variable enviornment
  //for the value. If the engine can't find it in the global environment
  //we will likely recieve "undefined" because of the creation phase
  //of our execution context.
}
function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();

function c() {
  function d() {
    console.log(myVarTwo); //Prints out 2
    //This is because the engine goes down the "chain" to
    //find the value of myVarTwo
  }
  var myVarTwo = 2;
  d();
}
var myVarTwo = 1;
c();

//Where a functions sits, determines its outer environment reference
