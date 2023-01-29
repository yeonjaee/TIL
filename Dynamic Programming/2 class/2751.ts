// 언어: nodejs
// 메모리: 237808 KB
// 시간: 1380 ms
// 코드길이: 162 B

const [n, ...numList] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((e) => Number(e));

console.log(numList.sort((a, b) => a - b).join("\n"));
