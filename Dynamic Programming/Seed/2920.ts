// 언어: nodejs
// 메모리: 9324 KB
// 시간: 132 ms
// 쾨드길이: 463 B

// @ts-ignore
let input = require("fs")
  .readFileSync(0)
  .toString()
  .split(" ")
  .map((el) => Number(el));

let compare = input.slice();

const ascSorting = (a, b) => {
  return a - b;
};

const descSorting = (a, b) => {
  return b - a;
};

if (compare.sort(ascSorting).join(" ") === input.join(" ")) {
  console.log("ascending");
} else if (compare.sort(descSorting).join(" ") === input.join(" ")) {
  console.log("descending");
} else {
  console.log("mixed");
}
