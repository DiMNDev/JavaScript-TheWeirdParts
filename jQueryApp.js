//using the dollar sign we specify a 'selector' to grab an element from the DOM
var q = $("ul.people li").addClass("newclass").removeClass("people");
//To be able to make methods chainable like this, we can return the 'this' to
console.log(q);
