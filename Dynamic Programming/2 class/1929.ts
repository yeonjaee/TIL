// 언어: nodejs
// 메모리: 50628 KB
// 시간: 444 ms
// 코드길이: 412 B

// 에라토스테네스의 체 알고리즘은 다수의 자연수에 대하여 소수 여부를 판별할 때 사용
const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((e) => +e);

const prime = { 1: true };

for (let i = 2; i <= Math.sqrt(m); i++) {
  if (prime[i]) continue;
  for (let j = i ** 2; j <= m; j += i) {
    prime[j] = true;
  }
}
const results = [];

for (let i = n; i <= m; i++) {
  if (!prime[i]) results.push(i);
}
console.log(results.join("\n"));
