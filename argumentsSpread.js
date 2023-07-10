function greet(firstName, LastName, language) {
  console.log(firstName);
  console.log(LastName);
  console.log(language);
  console.log("---------------");
}
greet();
greet("Josh");
greet("Josh", "Arnold");
function greet2(firstName, LastName = "Doe", language, ...others) {
  //The newer way to set default parameters ^
  //The older way to set default parameters (below)
  language = language || "english";
  console.log(firstName);
  console.log(LastName);
  console.log(language);
  if (arguments.length === 0) {
    //arguments.length is equal to parameters passed in at the callsite
    console.log("-Missing Parameters-");
  }
  //We can access arguments like we would in a normal array using
  //the bracket notation syntax
  console.log("arg0", arguments[0]);
  console.log(arguments);
  console.log(others); //Log all remaining parameters
  console.log("---------------");
}
greet2();
greet2("John");
greet2("John", "Smith");
greet2("John", "Smith", "Spanish", "extra item1", "extra item2");
