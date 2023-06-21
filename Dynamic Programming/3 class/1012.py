// 언어: python
// 메모리: 31556 KB
// 시간: 304 ms
// 코드길이: 676 B
  
import sys
sys.setrecursionlimit(10000)

def dfs(s_n,s_m):
    if (s_m < 0) | (s_m >= M) | (s_n < 0) | (s_n >= N):
        return False
    if graph[s_n][s_m]==1:
        graph[s_n][s_m]=0
        dfs(s_n-1,s_m)
        dfs(s_n+1,s_m)
        dfs(s_n,s_m-1)
        dfs(s_n,s_m+1)
        return True
    return False

test_case = int(input())
for _ in range(test_case):
    M,N,cnt = map(int,input().split())
    graph = [[0]*M for i in range(N)]
    for i in range(cnt):
        m,n = map(int,input().split())
        graph[n][m] = 1    
    
    result=0
    for i in range(N):
        for j in range(M):
            if dfs(i,j):
                result+=1
    print(result)
