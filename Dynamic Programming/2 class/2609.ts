// 언어: nodejs
// 메모리: 9592 KB
// 시간: 136 ms
// 코드길이: 326 B

// @ts-ignore
const [a, b] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map((i) => parseInt(i));

const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

const lcm = (a, b) => {
  let gcdValue = gcd(a, b);
  return (a * b) / gcdValue;
};

console.log(gcd(a, b));
console.log(lcm(a, b));
