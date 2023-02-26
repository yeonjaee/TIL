// 언어: nodejs
// 메모리: 9696 KB
// 시간: 224 ms
// 코드길이: 394 B

// @ts-ignore
let n = require("fs").readFileSync(0).toString().trim();
n = +n;

const getGenerator = (n) => {
  for (let i = 1; i < n; i++) {
    let sum = i;
    let num = i;

    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    if (sum === n) {
      return i;
    }
  }
  return 0;
};

console.log(getGenerator(n));
