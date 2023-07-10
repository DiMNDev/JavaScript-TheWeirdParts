const dooWork = (resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 1000);
};

const dooOtherWork = (resolve, reject) => {
  setTimeout(() => {
    resolve("How are you?");
  }, 3000);
};

let someTexxt = new Promise(dooWork);

// let someOtherText = someTexxt.then((val) => {
//   console.log("1st log: ", val);
//   return "How are you?";
// });

// someOtherText.then((val) => {
//   console.log(val);
// });

someTexxt
  .then((val) => {
    console.log("1st log: ", val);
    return "How are you?";
  })
  .then((val) => {
    console.log(val);
  });

async function doAllTheWork() {
  const someText = new Promise(dooWork);
  const text1 = await someText;
  console.log(text1);

  const otherText = new Promise(dooOtherWork);
  const text2 = await otherText;
  console.log(text2);
}

doAllTheWork();
console.log("Done!");
