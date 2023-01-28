// 언어: nodejs
// 메모리: 41984 KB
// 시간: 348 ms
// 코드길이: 629 B

// 이진 탐색 알고리즘 사용하는 문제. - 데이터가 정렬돼 있는 배열에서 특정한 값을 찾아내는 알고리즘

// @ts-ignore
const input = require("fs").readFileSync(0).toString().trim().split("\n");

const f = input[1].split(" ").map((x) => parseInt(x));
const s = input[3].split(" ").map((x) => parseInt(x));
// 먼저 정렬
f.sort((a, b) => a - b);

let a = [];
s.forEach((e) => {
  let low = 0;
  let high = f.length - 1;
  let result = false;

  while (low <= high) {
    let mid = (low + high) / 2;
    if (f[mid] === e) {
      result = true;
      break;
    } else if (f[mid] > e) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    return -1;
  }

  if (result) a.push(1);
  else a.push(0);
});

console.log(a.join("\n"));
