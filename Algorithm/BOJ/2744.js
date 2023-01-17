// 언어: nodejs
// 메모리: 9324 KB
// 시간: 116 ms
// 코드길이: 262 B

let input = require("fs").readFileSync(0).toString();
let result ='';
for(const c in input){
    if(input[c] === input[c].toUpperCase()){
        result += input[c].toLowerCase();
    } else{
        result += input[c].toUpperCase();
    }
}
console.log(result);