function greet(name) {
  //If name is undefined or "false" it will return "<Your name here>"
  name = name || "<Your name here>";
  //Operators are functions that return values
  console.log(name);
  console.log("Hello, " + name);
}
greet("Tony");
greet();
