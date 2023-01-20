// 언어: nodejs
// 메모리: 9324 KB
// 시간: 120 ms
// 코드길이: 156 B

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ')
    .map(Number);

console.log(input[0] + input[1] + input[2]);