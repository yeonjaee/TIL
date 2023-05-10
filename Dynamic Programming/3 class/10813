const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(x => parseInt(x));

const basket = Array.from({length: N}, (_, i) => i + 1);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(x => parseInt(x));
  [basket[a-1], basket[b-1]] = [basket[b-1], basket[a-1]];
}

console.log(basket.join(' '));
