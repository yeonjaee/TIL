// 언어: nodejs
// 메모리: 9332 KB
// 시간: 132 ms
// 쾨드길이: 132 B


const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ')
    .map(Number);

const chessPieces = [1,1,2,2,2,8];

// ex input chessPieces = [0,1,2,2,2,7]

// ex result = [1,0,0,0,0,1]

let result = input.map((value, index)=>{
    chessPieces[index] - value
})

console.log(...result);