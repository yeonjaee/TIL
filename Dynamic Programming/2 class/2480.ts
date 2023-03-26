// 언어: nodejs
// 메모리: 9324
// 시간: 124ms
// 코드길이: 464 B

// @ts-ignore
const dice = require('fs').readFileSync(0).toString().trim().split(' ');

const calculatePrize = (dice) => {
    let sortedDice = dice.sort((a, b) => b - a);
    if (sortedDice[0] === sortedDice[2]) {
        return 10000 + sortedDice[0] * 1000;
    } else if (sortedDice[0] === sortedDice[1] || sortedDice[1] === sortedDice[2]) {
        return 1000 + sortedDice[1] * 100;
    } else {
        return sortedDice[0] * 100;
    }
}

let prize = calculatePrize(dice);
console.log(prize);
