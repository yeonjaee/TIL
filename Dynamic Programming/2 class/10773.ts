// 언어: nodejs
// 메모리: 17528 KB
// 시간: 256 ms
// 코드길이: 328 B

// @ts-ignore
const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const numbs = [];

for (let i = 1; i <= n; i++) {
  let num = Number(input[i]);
  if (num === 0) numbs.pop();
  else numbs.push(num);
}

let result = 0;

for (let num2 of numbs) {
  result += num2;
}

console.log(result);
