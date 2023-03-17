// 언어: nodejs
// 메모리: 58492 KB
// 시간: 496 ms
// 코드길이: 425 B

const input = require("fs").readFileSync(0, "utf8");
const lines = input.trim().split("\n");
const points = [];
lines.slice(1).forEach((line) => {
  const [x, y] = line.split(" ").map(Number);
  points.push([x, y]);
});
points.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});
points.forEach((point) => {
  console.log(`${point[0]} ${point[1]}`);
});
