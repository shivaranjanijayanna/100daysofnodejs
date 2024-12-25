function test() {
  console.log("Function executed after 3 seconds");
}
setTimeout(test, 3000);

let timeoutId = setTimeout(() => {
  console.log("This will not execute");
}, 3000);
clearTimeout(timeoutId);
