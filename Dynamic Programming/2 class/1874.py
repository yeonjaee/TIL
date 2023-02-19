# 언어: python
# 메모리: 40792 KB
# 시간: 92 ms
# 코드길이: 422 B

from sys import stdin
n = int(stdin.readline())
in_ = map(lambda x : int(x.rstrip()), stdin.readlines())

def numeric():
    cnt, stack, result = 1, [], []
    for i in in_:
        while cnt <= i:
            stack.append(cnt)
            result.append('+')
            cnt+=1
        if stack.pop() != i:
            return 'NO'
        else:
            result.append('-')
    return '\n'.join(result)

print(numeric())