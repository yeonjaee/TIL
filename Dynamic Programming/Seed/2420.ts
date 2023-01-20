// 언어: nodejs
// 메모리: 9336 KB
// 시간: 116 ms
// 코드길이: 146 B

// * abs 안쓰고 if 문 쓰면 런타임 아웃

// @ts-ignore
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
console.log(Math.abs(input[0]-input[1]));

