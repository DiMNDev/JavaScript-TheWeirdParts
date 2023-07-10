var a = String("Hello");
var b = new String("Hello");
String.prototype.isLongerThan = function (limit) {
  return this.length > limit;
};

console.log("a is longer than 4: ", a.isLongerThan(4));
console.log("a is longer than 5: ", a.isLongerThan(5));

console.log(`Compare a: ${a} to b: ${b}`, a == b);
//DANGER!
console.log(`Strictly compare a: ${a} to b: ${b}`, a === b);
//Check types
console.log("typeOf a:", typeof a);
console.log("typeOf b:", typeof b);
