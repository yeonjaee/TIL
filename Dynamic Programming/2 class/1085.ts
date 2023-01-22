// 언어: nodejs
// 메모리: 9328 KB
// 시간: 124 ms
// 쾨드길이: 209 B

// @ts-ignore
let input = require("fs")
  .readFileSync(0)
  .toString()
  .split(" ")
  .map((el) => Number(el));

const minMove = [input[0], input[1], input[2] - input[0], input[3] - input[1]];
console.log(Math.min(...minMove));
