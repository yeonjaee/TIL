// 언어: nodejs
// 메모리: 9344
// 시간: 184 ms
// 코드길이: 238 B

let input = require('fs').readFileSync(0);

let count = 0;

while (true) {
    if (input % 5 === 0) {
        console.log(input / 5 + count);
        break;
    }

    if (0 > input) {
        console.log(-1);
        break;
    }

    count++;
    input -= 3;
}