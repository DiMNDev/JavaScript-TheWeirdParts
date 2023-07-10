(function (name) {
  //The variable greeting does not interfere with JavaScript file
  //"IIFE-safeCode1" because inside this IIFE we have created
  //a new "Execution Context" with it's own "Variable Environment"
  var greeting = "Hello";
  console.log(`${greeting} ${name}`);
})("Sally");

function greet(name) {
  //Without defining greeting in this variable context
  //JavaScript will attempt to locate the value of "greeting"
  //which will be found on the window object in the
  //"global execution context" because it is defined
  //in "IIFE-safeCode1". Therefore this function will
  //log "Bonjour Jack" to the console.
  //var greeting = "Hello";
  console.log(`${greeting} ${name}`);
  console.log(window.greeting); //Here we can see that "Bonjour"
  //is logged to the console that is found in the "global variable enviornment"
  //of the "global execution enviornment"
}
greet(window, "Jack");
