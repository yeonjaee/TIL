// 언어: nodejs
// 메모리: 9328 KB
// 시간: 136 ms
// 코드길이: 213 B

// BigInt 는 Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체입니다.
// BigInt의 typeof 판별 결과는 "bigint"
// @ts-ignore
const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

let money = input[0];
let people = input[1];

// The toString() method returns a string representing the specified BigInt object. The trailing "n" is not part of the string.
console.log((money / people).toString());
console.log((money % people).toString());
