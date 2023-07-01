// 언어: nodejs
// 메모리: 43424 KB
// 시간: 448 ms
// 코드길이: 666 B

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n, ratings;

rl.on('line', (line) => {
  if (!n) {
    n = parseInt(line);
    ratings = [];
  } else {
    ratings.push(parseInt(line));
    if (ratings.length === n) {
      rl.close();
    }
  }
}).on('close', () => {
  if (n === 0) {
    console.log(0);
  } else {
    ratings.sort((a, b) => a - b);
    const cut = Math.round(n * 0.15);
    ratings = ratings.slice(cut, n - cut);
    const average = ratings.reduce((acc, cur) => acc + cur, 0) / ratings.length;
    console.log(Math.round(average));
    process.exit();
  }
});
