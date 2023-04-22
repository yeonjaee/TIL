// 언어: nodejs
// 메모리: 9328 KB
// 시간: 120 ms
// 코드길이: 153 B

// @ts-ignore
const input = Number(require('fs').readFileSync(0));
let result = '';
for(let i=0; i<input/4; i++){
    result += 'long ';
}
console.log(result + 'int');