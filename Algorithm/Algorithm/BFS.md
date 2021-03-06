## 너비 우선 탐색

- 그래프에서 **가까운 노드부터 우선적으로 탐색하는 알고리즘**
- **큐 자료구조**를 이용하며, 구체적인 동작 과정은 다음과 같다.
  1. 탐색 시작 노드를 큐에 삽입하고 방문 처리한다.
  2. 큐에서 노드를 꺼낸 뒤에 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리한다.
  3. 더 이상 2번의 과정을 수행할 수 없을 때까지 반복한다.





### 동작 예시

---

![image-20220127180716557](assets/BFS/image-20220127180716557.png)

**[step 1]** 시작 노드인 '1'을 큐에 삽입하고 방문 처리한다.





![image-20220127180755914](assets/BFS/image-20220127180755914.png)

**[step 2]** 큐에서 노드 '1'을 꺼내 방문하지 않은 인접 노드 2,3,8을 큐에 삽입하고 방문 처리한다.





![image-20220127180939554](assets/BFS/image-20220127180939554.png)

**[step 3]** 큐에서 노드 2를 꺼내 방문하지 않은 인접 노드 7을 큐에 삽입하고 방문 처리한다.



![image-20220127181051075](assets/BFS/image-20220127181051075.png)

**[step 4]** 큐에서 노드 3를 꺼내 방문하지 않은 인접 노드 4, 5를 큐에 삽입하고 방문 처리한다.



![image-20220127181144083](assets/BFS/image-20220127181144083.png)

**[step 5]** 큐에서 노드 8을 꺼내고 방문하지 않은 인접 노드가 없으므로 무시한다.

...

...

...

![image-20220127181224682](assets/BFS/image-20220127181224682.png)

이러한 과정을 반복하여 **전체 노드의 탐색 순서**(큐에 들어간 순서)는 다음과 같다.

**탐색 순서**: 1 > 2 > 3 > 8 > 7 > 4 > 5 > 6





### 소스코드 예제

---

```python
# P

from collections import deque

# BFS 메서드 정의
def bfs(graph, start, visited):
    # 큐(Queue) 구현을 위해 deque 라이브러리 사용
    queue = deque([start])
    # 현재 노드를 방문 처리
    visited[start] = True
    # 큐가 빌 떄까지 반복
    while queue:
        # 큐에서 하나의 원소를 뽑아 출력하기
        v = queue.popleft()
        print(v,end=' ')
        # 아직 방문하지 않은 인접한 원소들을 큐에 삽입
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True

# 각 노드가 연결된 정보를 표현(2차원 리스트)
graph=[
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

# 각 노드가 방문된 정보를 표현(1차원 리스트)
visited = [False] * 9

# 정의된 DFS 함수 호출
bfs(graph,1,visited)

>>>
1 2 3 8 7 4 5 6 
```

