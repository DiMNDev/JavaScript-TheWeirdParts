console.log(this);

function a() {
  console.log(this);
  this.newVariable = "NewData";
}
a();
console.log(newVariable);
var b = function () {
  console.log(this);
};
b();

var c = {
  name: "Variable C",
  log: function () {
    var self = this; //Here we are targeting the "this" we want
    //by assigning it a reference in memory to the "this" in this
    //context that points to the object "c"
    self.name = "Updated OBJ C";
    console.log("this 1", this);

    var changeName = function (newName) {
      console.log("this 2", this); //This points to the window object
      //If we were to use this "this" we would be updating the window
      //name instead of the object.
      self.name = newName; //Here we are using the "this" we want to use
    };
    changeName(`Updated name ${self.name}`);
    console.log("this 3", this);
  },
};

c.log();
