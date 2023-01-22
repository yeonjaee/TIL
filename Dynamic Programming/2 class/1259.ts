// 언어: nodejs
// 메모리: 9424 KB
// 시간: 136 ms
// 쾨드길이: 226 B

// @ts-ignore
let input = require("fs").readFileSync(0).toString().trim().split("\n");

input.pop();

for (let i = 0; i < input.length; i++) {
  console.log(
    input[i] === input[i].split("").reverse().join("") ? "yes" : "no"
  );
}
