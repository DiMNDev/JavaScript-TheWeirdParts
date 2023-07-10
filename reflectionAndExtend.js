var person = {
  firstName: "Default",
  lastName: "Default",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

var john = {
  firstName: "John",
  lastName: "Doe",
  career: "software developer",
};

//Don't do this EVER! Just for demonstration only!!
john.__proto__ = person;

for (var prop in john) {
  //Prints only properties and methods that john has,
  //excluding inherited protoypes
  if (john.hasOwnProperty(prop)) {
    console.log(`${prop} : ${john[prop]}`);
  }
}
console.log("--------------------");
for (var prop in john) {
  //Prints only properties and methods that are inherited
  //from prototypes.
  if (!john.hasOwnProperty(prop)) {
    console.log(`${prop} : ${john[prop]}`);
  }
}

var jane = {
  address: "111 Main St.",
  career: "frycook",
  getFormalFullName: function () {
    return `${this.lastName}, ${this.firstName}`;
  },
};

var jim = {
  getFirstName: function () {
    return firstName;
  },
};
//--------------------------------------------------------
//This in an excerpt from the underscore library
//--------------------------------------------------------
// An internal function for creating assigner functions.
// const underscoreExtend = function createAssigner(keysFunc, defaults) {
//   return function (obj) {
//     var length = arguments.length;
//     if (defaults) obj = Object(obj);
//     if (length < 2 || obj == null) return obj;
//     for (var index = 1; index < length; index++) {
//       var source = arguments[index],
//         keys = keysFunc(source),
//         l = keys.length;
//       for (var i = 0; i < l; i++) {
//         var key = keys[i];
//         if (!defaults || obj[key] === void 0) obj[key] = source[key];
//       }
//     }
//     return obj;
//   };
// };
// underscoreExtend(john, jane, jim);
//--------------------------------------------------------
//This is my extend function
//--------------------------------------------------------
function copyAll(toObject) {
  console.log("copyAllTo: ", toObject.firstName || "Object Name Undefined");
  let argsLength = arguments.length;
  if (argsLength === 0) {
    return toObject;
  }
  for (let i = 1; i < argsLength; i++) {
    for (prop in arguments[i]) {
      console.log(`-${prop}-`);
      if (!toObject[prop]) {
        toObject[prop] = arguments[i][prop];
        console.log(
          `Added Property to ${toObject.firstName || "Object Name Undefined"}`
        );
      } else {
        console.log(`will not overwrite`);
      }
    }
  }
  return toObject;
}
const johnny = copyAll(john, jane, jim);
console.log(johnny);
console.log(john);
console.log(john.getFormalFullName());
jane.firstName = "Jane";
copyAll(jane);
console.log(jane);
//--------------------------------------------------------
