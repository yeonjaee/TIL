// 언어: nodejs
// 메모리: 11172 KB
// 시간: 212 ms
// 코드길이: 871 B

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
let currLine = 0;

rl.on('line', function(line) {
    lines.push(line);
});

rl.on('close', function() {
    const T = Number(lines[currLine++]);
    for (let i = 0; i < T; i++) {
        const [N, M] = lines[currLine++].split(' ').map(Number);
        const priorities = lines[currLine++].split(' ').map(Number);
        const queue = priorities.map((priority, index) => ({ priority, index }));
        let printedCount = 0;
        while (queue.length > 0) {
            const current = queue.shift();
            if (queue.some(doc => doc.priority > current.priority)) {
                queue.push(current);
            } else {
                printedCount++;
                if (current.index === M) {
                    console.log(printedCount);
                    break;
                }
            }
        }
    }
});
