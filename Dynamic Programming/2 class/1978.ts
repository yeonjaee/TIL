// 언어: nodejs
// 메모리: 9616 KB
// 시간: 176 ms
// 코드길이: 357 B

// @ts-ignore
const input = require("fs").readFileSync(0).toString().trim().split("\n");
const nums = input[1].split(" ").map(Number);
let count = 0;
for (const num of nums) {
  let demical = true;
  if (num === 1) demical = false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) demical = false;
  }
  if (demical) count += 1;
}

console.log(count);
