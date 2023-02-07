// 언어: nodejs
// 메모리: 9704 KB
// 시간: 180 ms
// 코드길이: 554 B

// @ts-ignore
const input = require("fs").readFileSync(0).toString().split("\n");
input[0] = input[0].split(" ");
const numbs = input[1].split(" ").map((e) => parseInt(e));
const N = parseInt(input[0][0]);
const M = parseInt(input[0][1]);
let result = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (i === j || i === k || j === k) continue;
      const sum = numbs[i] + numbs[j] + numbs[k];
      if (sum > result && sum <= M) result = sum;
      if (result === M) break;
    }
  }
}

console.log(result);
