function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log("Finished Function");
}

function clickHandler() {
  console.log("Click Event!");
}

document.addEventListener("click", clickHandler);
waitThreeSeconds();
console.log("Finished Execution");

//While waiting 3 seconds, clicking in the dom does not trigger the event,
//It does not push it onto the qeue stack for some reason I do not know
