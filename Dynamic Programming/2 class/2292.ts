// 언어: nodejs
// 메모리: 10900 KB
// 시간: 188 ms
// 코드길이: 130 B

const input = require("fs").readFileSync(0);

let r = 1;
let b = 1;

while (b < input) {
  b += 6 * r;
  r++;
}
console.log(r);
