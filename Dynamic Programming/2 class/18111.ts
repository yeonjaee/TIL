// 언어: nodejs
// 메모리: runtimeError
// 시간: ms
// 코드길이: 2066 B

const input = require('fs').readFileSync(0).toString().trim().split('\n');

const [N, M, B] = input[0].split(' ').map(Number);
const heightMap = input.slice(1).map(row => row.split(' ').map(Number));

const maxHeight = 256;
const INF = Number.MAX_SAFE_INTEGER;

const dp: number[][][] = new Array(N).fill(0).map(() =>
    new Array(M).fill(0).map(() => new Array(maxHeight + 1).fill(INF))
);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        dp[i][j][heightMap[i][j]] = 0;
    }
}

for (let h = 0; h <= maxHeight; h++) {
    for (let k = 0; k <= B; k++) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                const curHeight = heightMap[i][j];
                if (dp[i][j][curHeight] === INF) continue;
                if (j + 1 < M && k + 1 <= B) {
                    const nextHeight = heightMap[i][j + 1];
                    const cost = (curHeight - nextHeight) ** 2 + 1;
                    dp[i][j + 1][nextHeight] = Math.min(dp[i][j + 1][nextHeight], dp[i][j][curHeight] + cost);
                }
                if (i + 1 < N && k + 1 <= B) {
                    const nextHeight = heightMap[i + 1][j];
                    const cost = (curHeight - nextHeight) ** 2 + 1;
                    dp[i + 1][j][nextHeight] = Math.min(dp[i + 1][j][nextHeight], dp[i][j][curHeight] + cost);
                }
                if (k + curHeight <= maxHeight) {
                    dp[i][j][0] = Math.min(dp[i][j][0], dp[i][j][curHeight] + curHeight);
                }
                if (k >= curHeight) {
                    const nextHeight = curHeight + 1;
                    const cost = 1;
                    dp[i][j][nextHeight] = Math.min(dp[i][j][nextHeight], dp[i][j][curHeight] + cost);
                }
            }
        }
    }
}

let minTime = INF;
let maxHeightReached = 0;
for (let h = 0; h <= maxHeight; h++) {
    if (dp[N - 1][M - 1][h] < minTime) {
        minTime = dp[N - 1][M - 1][h];
        maxHeightReached = h;
    }
}

console.log(`${minTime} ${maxHeightReached}`);