// 언어: nodejs
// 메모리: 9416 KB
// 시간: 148 ms
// 코드길이: 273 B

// @ts-ignore
const input = require("fs").readFileSync(0).toString().trim().split("\n");
input.pop();
let values = input.map((el)=>
    el.split(' ').map(Number).sort((a,b)=> a-b))
values.forEach((v)=>
    console.log((v[0] * v[0]) +(v[1] * v[1]) === (v[2] * v[2]) ? 'right': 'wrong')
);
