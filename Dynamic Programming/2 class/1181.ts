// 언어: nodejs
// 메모리: 23644 KB
// 시간: 1348 ms
// 코드길이: 351 B

// @ts-ignore
const [n, ...cases] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const compare1 = (a, b) => {
  return a > b ? 1 : a < b ? -1 : 0;
};

const compare2 = (a, b) => {
  return a.length - b.length;
};

// @ts-ignore
Array.from(new Set(cases))
  .sort(compare1)
  .sort(compare2)
  .forEach((x) => console.log(x));
