const [T, ...numbers] = require("fs").readFileSync(0).toString().trim().split("\n").map(Number);

const solution = (T, numbers) => {
  const memo = [...Array(11)];

  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 4;

  for (let i = 4; i < 11; i += 1) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  }

  for (let i = 0; i < T; i += 1) {
    console.log(memo[numbers[i]]);
  }
}

solution(T, numbers);
