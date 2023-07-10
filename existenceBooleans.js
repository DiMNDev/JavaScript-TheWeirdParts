var a;
a = 0;
//If we want to check 0 as a value without "a===0" this would result in "Nothing is there"
/*
Comparisions run in order of precedence. In the if statement below
JavaScript will first check "a===0" is true with strict equality, 
if that fails, it will then assess if "a" is true.
*/
if (a || a === 0) {
  console.log("Something is there");
} else {
  console.log("Nothing is there");
}
