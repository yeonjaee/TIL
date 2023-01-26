// 언어: nodejs
// 메모리: 12744 KB
// 시간: 148 ms
// 코드길이: 744 B

// @ts-ignore
let input = require("fs").readFileSync(0).toString().trim().split("\n");
let [n,...commands] = input;
const stack = [];
const output = [];
for(let i=0; i<n; i++){
    const command = commands[i].split(' ')[0];
    switch(command){
        case 'push':
            stack.push(commands[i].split(' ')[1]);
            break;
        case 'pop':
            output.push(stack.length < 1 ? -1 : stack.pop());
            break;
        case 'size':
            output.push(stack.length);
            break;
        case 'empty':
            output.push(stack.length < 1 ? 1 : 0);
            break;
        case 'top':
            output.push(stack.length < 1 ? -1 : stack[stack.length-1]);
            break;
    }
}
console.log(output.join('\n'));