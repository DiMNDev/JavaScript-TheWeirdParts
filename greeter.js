(function (global, $) {
  //'new' an object
  var Greeter = function (firstName, lastName, language) {
    return new Greeter.init(firstName, lastName, language);
  };
  //hidden within the scope of the IIFE and never directly accessible
  var supportedLangs = ["en", "es"];
  //informal greetings
  var grettings = {
    en: "Hello",
    es: "Hola",
  };
  //formal greetings
  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
  };
  //logger message
  var logMessages = {
    en: "Logged in",
    es: "inició sesión",
  };
  //define prototypes, functions to be accessible from the Greeter object
  Greeter.prototype = {
    //concat and return full name
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    //validate the language is supported
    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },
    //concat informal greeting
    greeting: function () {
      return `${grettings[this.language]} ${this.firstName}!`;
    },
    //concat formal greeting
    formalGreeting: function () {
      return `${formalGreetings[this.language]}, ${this.fullName()}`;
    },
    //returns greeting
    greet: function (formal) {
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }
      return this; //chainable function
    },
    //Log message by language
    log: function () {
      if (console) {
        console.log(`${logMessages[this.language]}: ${this.fullName()}`);
      }
      return this;
    },
    //set the language of our greeter
    setLanguage: function (lang) {
      this.language = lang;
      this.validate();
      return this;
    },
    //updates DOM with greeting using selector
    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw "jQuery not loaded";
      }

      if (!selector) {
        throw "Missing jQuery selector";
      }
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      $(selector).html(msg);
      return this;
    },
  };
  //initializer
  Greeter.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "First";
    self.lastName = lastName || "Last";
    self.language = language || "en";
  };
  //adds Greeter prototypes to init prototype
  Greeter.init.prototype = Greeter.prototype;
  //creates an easier to use alias to call our library and access it's methods.
  global.Greeter = global.G$ = Greeter;
})(window, jQuery);
