// 언어: c++
// 메모리: 2024 KB
// 시간: 0 ms
// 쾨드길이: 423 B

#include <iostream>
using namespace std;
int main(void)
{
	string str;
	cin >> str;
	double score=0;
    cout << fixed;
    cout.precision(1);
	switch (str[0])
	{
	case 'A' :
		score += 4.0;
		break;
	case 'B':
		score += 3.0;
		break;
	case 'C':
		score += 2.0;
		break;
	case 'D':
		score += 1.0;
		break;
	}
	switch (str[1])
	{
	case '+':
		score += 0.3;
		break;
	case '-':
		score -= 0.3;
		break;
	}
	cout << score;
}