// 언어: nodejs
// 메모리: 9532 KB
// 시간: 136 ms
// 코드길이: 471 B

// @ts-ignore
const input = require("fs").readFileSync(0).toString().trim().split("\n");

const testCase = +input[0];

for (let i = 1; i <= testCase; i++) {
  const tests = input[i];
  const arr = [];
  let result = "YES";

  for (let j = 0; j < tests.length; j++) {
    if (tests[j] === "(") arr.push(1);
    else {
      if (!arr.pop()) {
        result = "NO";
        break;
      }
    }
  }
  if (arr.length !== 0) {
    result = "NO";
  }
  console.log(result);
}
