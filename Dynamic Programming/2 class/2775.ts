// 언어: nodejs
// 메모리: 9796 KB
// 시간: 124 ms
// 코드길이: 574 B

const input = require("fs").readFileSync(0).toString().trim().split("\n");

const t = Number(input.shift());
let apt = [];
let answer = "";

for (let i = 0; i < t * 2; i = i + 2) {
  const k = input[i];
  const n = input[i + 1];
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  apt.push(arr);

  answer += apt[k][n - 1] + "\n";
  apt = [];
}

console.log(answer);
