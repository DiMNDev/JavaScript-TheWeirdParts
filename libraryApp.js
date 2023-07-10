//gets a new object(we omitted the need to use the 'new' keyword)
var g = G$("John", "Doe");
//use our chainable methods
g.greet().setLanguage("es").greet(true).log();
//let's use our object on the click of the login button
$("#login").click(function (e) {
  e.preventDefault();
  //create a new 'Greeter' object(pass the parameters of the user from the back end)
  var loginGrtr = G$("John", "Doe");
  //hide the login on screen
  $("#logindiv").hide();
  //fire off an HTML greeting, passing the '#greeting' as the seelctor and che chosen language, and log the welcome as well.
  loginGrtr.setLanguage($("#lang").val()).HTMLGreeting("#greeting", true).log();
});
