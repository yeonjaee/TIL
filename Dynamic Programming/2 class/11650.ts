// 언어: nodejs
// 메모리: 60324 KB
// 시간: 504 ms
// 코드길이: 345 B

// @ts-ignore
const [n, ...dots] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

// @ts-ignore
const location = dots.map((e) => e.split(" ").map((num) => +num));
// @ts-ignore
const result = location.sort((a, b) => {
  if (a[0] > b[0]) return 1;
  else if (a[0] < b[0]) return -1;
  else return a[1] - b[1];
});
console.log(result.map((e) => e.join(" ")).join("\n"));
