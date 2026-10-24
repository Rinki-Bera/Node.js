let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter your name:", function (name) {
  console.log("Hello" + " " + name);
  rl.question("Enter first number:", function (a) {
    rl.question("Enter second number:", function (b) {
      console.log("Sun=", Number(a) + Number(b));
      rl.close();
    });
  });
});
