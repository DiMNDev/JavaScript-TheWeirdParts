function greet(language) {
  //Based on the language parameter we can determine what we want
  //it to return to be able to create our new functions "greetEnglish"
  //and "greetSpanish" down below.
  //This will preserve the language parameter in each respective
  //closure?
  return function (firstName, lastName) {
    if (language === "english") {
      console.log(`Hello, ${firstName} ${lastName}`);
    }
    if (language === "spanish") {
      console.log(`Hola, ${firstName} ${lastName}`);
    }
  };
}
//Using closures we can capture the values we need and create new
//functions from our returned functions that can differ based on
//the parameters we pass to the "parent" function. When we create
//these new functions they can then accept their own parameters.
var greetEnglish = greet("english");
var greetSpanish = greet("spanish");
//When we invoke the below functions we have preserved in memory
//the language parameter so our code will return the desired result
greetEnglish("Josh", "Arnold");
greetSpanish("Mary", "Jane");
