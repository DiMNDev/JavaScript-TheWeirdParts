function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(`Function ${i}`);
    });
  }
  return arr;
}

var fs = buildFunctions();

fs[0](); //Each will return 3, because we are referencing i later,
//after the function has completed, in the closure it returns
//the current value, the latest value of i which is 3.
fs[1]();
fs[2]();

//The ES6/Modern way
function buildFunctions2() {
  var arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(`Function ${i}`);
    });
  }
  return arr;
}

var fs2 = buildFunctions2();

fs2[0](); //Each will return it's respective value of i at the time
//of iteration during the for loop even after the "buildFunctions2"
//function has completed running. This has to do with the keyword
//"let". let handles memory differently which allows us to retain
//the values we want. let is block scoped where as var is function
//scoped.
fs2[1]();
fs2[2]();

//The ES5/old way
function buildFunctions3() {
  var arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function (j) {
          console.log(`Function ${i}`);
        };
      })(i)
    );
  }
  return arr;
}

var fs3 = buildFunctions3();

fs3[0](); //By utilizing IIFEs we can "preserve" the value of i
//by passing in i as a parameter to the IIFE which immediatley
//invokes and returns the function and pushes each function to
//our array with it's respective values in memory. We are essentially
//capturing the value in the returned functions "Execution Context"
//resulting in the desired behavior.
fs3[1]();
fs3[2]();
