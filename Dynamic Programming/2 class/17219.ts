interface PasswordMap {
    [key: string]: string;
}

const solution = (input: string): string => {
    const [N, M, ...passwords] = input.trim().split('\n');
    const passwordMap: PasswordMap = {};

    for (let i = 0; i < parseInt(N); i++) {
        const [site, password] = passwords[i].split(' ');
        passwordMap[site] = password;
    }

    const queries = passwords.slice(parseInt(N));
    let result = '';

    for (let i = 0; i < parseInt(M); i++) {
        result += passwordMap[queries[i]] + '\n';
    }

    return result;
}

const input = require('fs').readFileSync(0);
console.log(solution(input));