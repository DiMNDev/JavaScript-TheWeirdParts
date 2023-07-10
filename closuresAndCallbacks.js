function sayHiLater() {
  var greeting = "Hi!";

  setTimeout(() => {
    console.log(greeting);
  }, 3000);
}

sayHiLater();

function tellMeWhenDone(callback) {
  var a = 1000;
  var b = 2000;

  callback(); //The function to run that was passed in as a parameter
}

tellMeWhenDone(function () {
  console.log("I am done.");
});

tellMeWhenDone(function () {
  console.log("all done.");
});
