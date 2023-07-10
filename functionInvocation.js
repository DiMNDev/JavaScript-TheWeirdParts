function b() {
  console.log("finished function b");
}

function a() {
  b(); //Execution of function a will pause here and execute function b
  //After function b has finished execution, the lines below will then execute
  console.log("finished function a");
}

a();
