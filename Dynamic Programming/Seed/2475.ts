// 언어: nodejs
// 메모리: 9332 KB
// 시간: 120 ms
// 코드길이: 206 B

// @ts-ignore
const input = require('fs').readFileSync(0).toString().split(' ').map(Number);

const func = (n) =>{
    return n*n;
}
let result = 0;
for(const n of input){
    result += func(n);
}
console.log(result%10);