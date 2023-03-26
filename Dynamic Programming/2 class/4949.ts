// 언어: nodejs
// 메모리: 13692
// 시간: 400ms
// 코드길이: 1006 B

const input = require('fs').readFileSync(0).toString().trim().split('\n');

const isOpeningBracket = (char) => {
    return char === '(' || char === '[';
};

const isClosingBracket = (char) => {
    return char === ')' || char === ']';
};

const isMatchingBracket = (open, close) => {
    return (open === '(' && close === ')') || (open === '[' && close === ']');
};

const isBalanced = (expression) => {
    const stack = [];

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (isOpeningBracket(char)) {
            stack.push(char);
        } else if (isClosingBracket(char)) {
            const lastOpening = stack.pop();
            if (!lastOpening || !isMatchingBracket(lastOpening, char)) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

for (let i = 0; i < input.length; i++) {
    const expression = input[i];

    if (expression === '.') {
        break;
    }

    const isBalancedExpression = isBalanced(expression) ? 'yes' : 'no';
    console.log(isBalancedExpression);
}
