// 언어: nodejs
// 메모리: 9596 KB
// 시간: 124 ms
// 코드길이: 234 B

const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

// 재귀함수 사용
const factorial = (n) =>{
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(input));