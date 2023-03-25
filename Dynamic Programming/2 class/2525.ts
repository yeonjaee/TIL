// 언어: nodejs
// 메모리: 9324
// 시간: 124ms
// 코드길이: 288 B

// @ts-ignore
const input = require('fs').readFileSync(0).toString().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const c = parseInt(input[1]);

let h = Math.floor((a * 60 + b + c) / 60);
let m = (a * 60 + b + c) % 60;

if (h >= 24) {
    h -= 24;
}

console.log(`${h} ${m}`);