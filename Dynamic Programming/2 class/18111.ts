// 언어: nodejs
// 메모리: 16488
// 시간: 436ms
// 코드길이: 1372 B

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, b] = input[0].split(' ').map(Number);
const ground = input.slice(1).map(row => row.split(' ').map(Number));
let minHeight = 256;
let maxHeight = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (ground[i][j] < minHeight) minHeight = ground[i][j];
        if (ground[i][j] > maxHeight) maxHeight = ground[i][j];
    }
}

let minTime = Infinity;

let answerHeight;
for (let h = minHeight; h <= maxHeight; h++) {
    let inventory = b;
    let time = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const diff = ground[i][j] - h;
            if (diff > 0) {
                time += diff * 2;
                inventory += diff;
            } else if (diff < 0) {
                time -= diff;
                inventory += diff;
            }
        }
    }

    if (inventory >= 0 && time <= minTime) {
        minTime = time;
        answerHeight = h;
    }
}

console.log(minTime, answerHeight);