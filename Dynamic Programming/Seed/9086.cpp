// 언어: c++
// 메모리: 2024 KB
// 시간: 0 ms
// 코드길이: 236 B

// c++ 에선 length, size 뒤에 () 붙여야 함.

#include <iostream>
#include <string>
using namespace std;

int main(){
    int testCase;
    string text;
    cin >> testCase;
    while (testCase--){
        cin >> text;
        cout << text[0] << text[text.size()-1] << '\n';
    }
}