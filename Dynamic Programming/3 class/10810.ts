// 언어: nodejs
// 메모리: 9376 KB
// 시간: 136 ms
// 쾨드길이: 355 B

// @ts-ignore
const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const baskets = new Array(N).fill(0);

for(let i = 1; i <= M; i++){
    const [start, end, ball] = input[i].split(' ').map(Number);
    for(let j = start - 1; j < end; j++){
        baskets[j] = ball;
    }
}

console.log(baskets.join(' '));