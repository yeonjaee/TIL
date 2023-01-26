// @ts-ignore
let [n, ...number] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let output = [];
for (let i = 0; i < n; i++) {
  output.push(number[i]);
}
output.sort((a, b) => a - b);
for (const o of output) {
  console.log(o);
}
