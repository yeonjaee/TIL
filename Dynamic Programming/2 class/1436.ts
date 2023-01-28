// 언어: nodejs
// 메모리: 23232 KB
// 시간: 444 ms
// 코드길이: 240 B

let input = require("fs").readFileSync(0).toString().trim();
input = Number(input);
let sham = 666;

while (input !== 0) {
  if (String(sham).includes("666")) input -= 1;
  if (input === 0) break;
  sham += 1;
}
console.log(sham);
