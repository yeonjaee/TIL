// 언어: nodejs
// 메모리: 9340 KB
// 시간: 144 ms
// 코드길이: 245 B

// @ts-ignore
const [N, K] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map((e) => +e);

let n = 1;
let r = 1;

for (let i = N - K + 1; i <= N; i++) {
  n *= i;
}

for (let i = 1; i <= K; i++) {
  r *= i;
}

console.log(n / r);
