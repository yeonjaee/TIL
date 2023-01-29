// 언어: nodejs
// 메모리: 9576 KB
// 시간: 132 ms
// 코드길이: 318 B

let [n, text] = require("fs").readFileSync(0).toString().trim().split("\n");

const M = 1234567891;
let hash = 0;
let double = 1;
const func = () => {
  for (let i = 0; i < text.length; i++) {
    hash += (text.charCodeAt(i) - 96) * double;
    double *= 31;
    double %= M;
    hash %= M;
  }
  return hash;
};
console.log(func());
