function greet(whatToSay) {
  return function (name) {
    console.log(`${whatToSay} ${name}`);
  };
}
greet("Bonjour")("Sally");

var sayHi = greet("Hola");
sayHi("Jack");
