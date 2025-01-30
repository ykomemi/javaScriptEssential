// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

/* {
  // Block scope
  var blockVar = "I'm a block var";
  let blockLet = "I'm a block let";
  const blockConst = "I'm a block const";
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

console.log(blockVar);
console.log(blockConst);
console.log(blockLet); */

function show() {
  var functionVar = "I'm a block-scoped var";
}

show();
console.log(functionVar);
