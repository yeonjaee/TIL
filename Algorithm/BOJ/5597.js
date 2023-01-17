// 언어: nodejs
// 메모리: 9328 KB
// 시간: 120 ms
// 코드길이: 161 B

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

for(let i=1; i<31; i++){
    if(!input.includes(i))
        console.log(i);
}