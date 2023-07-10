var objectLiteral = {
  firstName: "Mary",
  isProgrammer: true,
};

var toJSONvalue = JSON.stringify(objectLiteral);

console.log(toJSONvalue);

var fromJSONvalue = JSON.parse(`{ "firstName": "Mary", "isProgrammer": true }`);

console.log(fromJSONvalue);
