let input = require('fs'.readFileSync(0).toString().trim().split("\n");

const M = +input[0].split(" ")[1];
let max = 0;
let tree = [];
input[1].split(" ").forEach((el) => {
  if (+el > max) max = +el;
  tree.push(+el);
});

const solution = (M, tree) => {
  let mid = 0;
  let total = 0;
  let min = 0;
  let answer = 0
  while (min <= max) {
    total = 0;
    mid = Math.floor((max + min) / 2);
    tree.forEach((el) => {
      let rest = el - mid;
      if (rest > 0) total += rest;
    });

    if (total >= M) {
        if(mid> answer) answer =mid
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  console.log(answer);
}
    
solution(M, tree);
