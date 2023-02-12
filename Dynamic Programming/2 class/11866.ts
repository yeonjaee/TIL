// 언어: nodejs
// 메모리: 11808 KB
// 시간: 228 ms
// 코드길이: 411 B

// @ts-ignore
const input = require("fs").readFileSync(0).toString().trim().split(" ");

const n = +input[0];
const k = +input[1];
let result = [];

// @ts-ignore
const arr = Array.from({ length: n }, (v, i) => {
  return i + 1;
});

for (let i = 0; i < n; i++) {
  for (let j = 1; j <= k; j++) {
    if (j === k) result.push(arr.shift());
    else arr.push(arr.shift());
  }
}
console.log("<" + result.join(", ") + ">");
