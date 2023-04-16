// 언어: nodejs
// 메모리: 9344 KB
// 시간: 152 ms
// 쾨드길이: 320 B

let input = require('fs').readFileSync(0).toString().trim().split('\n');
let price = Number(input[0]);
let itemsNumber = Number(input[1]);
let sum = 0;

for(let i = 2; i <= itemsNumber+1; i++){
    let arr = input[i].split(' ').map(e=>Number(e));
    sum += arr[0] * arr[1];
}

console.log(price === sum ? 'Yes' : 'No');