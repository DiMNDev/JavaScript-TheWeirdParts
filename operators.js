var a = 3 + 4;
console.log(a);
var b = 3 + 4 * 5; //Multiplication has a higher precedence than addition
console.log(b);

let c = 3,
  d = 4,
  e = 5;

c = d = e; //Right to left precedence

console.log(c);
console.log(d);
console.log(e);

/*
Precedence is important in mathmatics and our code. 
Understanding how JavaScript handles operators will help
us to determine the correct output of our code as we are writing it.
*/
