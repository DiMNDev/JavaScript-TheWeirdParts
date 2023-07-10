function getPerson() {
  return; //Because we placed our object on the line below, the engine
  //thinks we are done after the return keyword and automatically
  //adds a semi-colon.
  {
    firstName: "tony";
  }
}
console.log(getPerson());

function getPerson2() {
  return {
    //Placing the start of the object brackets here we will
    //get the return of the object we want.
    firstName: "tony",
  };
}
console.log(getPerson2());
