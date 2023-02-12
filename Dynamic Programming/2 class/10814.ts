// 언어: nodejs
// 메모리: 25464 KB
// 시간: 372 ms
// 코드길이: 181 B

// @ts-ignore
const input = require("fs").readFileSync(0).toString().trim().split("\n");
let n = input.shift();
input.sort((a, b) => parseFloat(a) - parseFloat(b));
console.log(input.join("\n"));
