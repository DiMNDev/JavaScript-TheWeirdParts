function b() {
  console.log("b was called!");
}

b();
//returns undefined because we declared "a" later in the code
console.log(a);

var a = "Hello World!";
//returns "Hello World!" because we assigned the value during the execution(executed lexically) phase
console.log(a);
