## 언어: python
## 메모리: 30840 KB
## 시간: 104 ms
## 코드길이: 246 B

def factorial(n):
    num = 1
    for i in range(1, n+1):
        num *= i
    return num


T = int(input())

for _ in range(T):
    n, m = map(int, input().split())
    bridge = factorial(m) // (factorial(n) * factorial(m - n))
    print(bridge)