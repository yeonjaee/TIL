// 언어: nodejs
// 메모리: 9340 KB
// 시간: 120 ms
// 코드길이: 209 B

// @ts-ignore
const input = require('fs').readFileSync(0).toString().split(' ').map(Number);

const test = (a,b) => {
    let result = a*a-b*b;
    return result
}

console.log(test(parseInt(input[0]),parseInt(input[1])));
