console.log("1 < 2 < 3", 1 < 2 < 3); //Returns true
console.log("3 < 2 < 1", 3 < 2 < 1); //Also returns 2
//Why?
console.log("3 < 2", 3 < 2); //Returns false
//The line below we are comparing (3 < 2) < 1
console.log("false < 1", false < 1); //Returns true
//The line above we are coercing false into a number which results in zero
//With the boolean(false) converted to a number(0) and comparing
//using less-than (<) against the number one will result in true.
console.log('3 == "3"', 3 == "3"); //Logs true
console.log('3 === "3"', 3 === "3"); //Logs false
/*
The double equals operator (==) will attempt to coerce the type
The triple equals operator (===) will NOT attempt to coerce the type
Use triple equals ALWAYS UNLESS you explicitly and consciously wish
to coerce the values.
*/

//Comparisions run in order of precedence
