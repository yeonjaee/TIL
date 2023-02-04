// 언어: nodejs
// 메모리: 23232 KB
// 시간: 444 ms
// 코드길이: 240 B

// @ts-ignore
const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, k] = input
  .shift()
  .split(" ")
  .map((e) => parseInt(e));
const cables = input.map((e) => parseInt(e)).sort();
let max = Math.max(...cables);
let min = 1;

while (min <= max) {
  let mid = parseInt(String((max + min) / 2));
  let piece = cables
    .map((cable) => parseInt(String(cable / mid)))
    .reduce((a, b) => a + b, 0);
  if (piece >= k) min = mid + 1;
  else max = mid - 1;
}

console.log(max);
