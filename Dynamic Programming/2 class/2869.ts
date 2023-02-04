// 언어: nodejs
// 메모리: 9336 KB
// 시간: 124 ms
// 코드길이: 142 B

let input = require("fs").readFileSync(0).toString().trim().split(" ");
console.log(Math.ceil((input[2] - input[1]) / (input[0] - input[1])));
