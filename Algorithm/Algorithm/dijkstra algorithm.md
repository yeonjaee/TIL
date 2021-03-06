## 다익스트라 알고리즘

![image-20220128094649769](assets/dijkstra%20algorithm/image-20220128094649769.png)



- 최단 경로 알고리즘은 **가장 짧은 경로를 찾는 알고리즘**을 의미함.
- 다양한 문제 상황
  - 한 지점에서 다른 한 지점까지의 최단 경로
  - 한 지점에서 다른 모든 지점까지의 최단 경로
  - 모든 지점에서 다른 모든 지점까지의 최단 경로
- 각 지점은 그래프에서 노드로 표현
- 지점 간 연결된 도로는 그래프에서 간선으로 표현

---





### 다익스트라 최단 경로 알고리즘 개요

---

- **특정 노드**에서 출발하여 **다른 모든 노드**로 가는 최단 경로를 계산함.
- 음의 간선이 없을 때 정상적으로 동작함.
  - 현실 세계의 도로(간선)은 음의 간선으로 표현되지 않는 것 처럼.
- 그리디 알고리즘으로 분류됨.
  - **매 상황에서 가장 비용이 적은 노드를 선택**해 임의의 과정을 반복함.

- 알고리즘의 **동작 과정**은 다음과 같다.
  1. 출발 노드 설정
  2. 최단 거리 테이블 초기화
  3. 방문하지 않은 노드 중에서 최단 거리가 가장 짧은 노드를 선택
  4. 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여 최단 거리 테이블을 갱신
  5. 위 과정에서 3번과 4번을 반복함.

![image-20220128100708907](assets/dijkstra%20algorithm/image-20220128100708907.png)

- 알고리즘 동작 과정에서 최단 거리 테이블은 각 노드에 대한 현재까지의 최단 거리 정보를 가지고 있다.

![image-20220128100726249](assets/dijkstra%20algorithm/image-20220128100726249.png)

- 처리 과정에서 더 짧은 경로를 찾으면 '이제부터는 이 경로가 제일 짧은 경로야'라고 갱신한다.



---



![image-20220128100825085](assets/dijkstra%20algorithm/image-20220128100825085.png)

- 초기 상태: 출발 노드 설정



![image-20220128100946653](assets/dijkstra%20algorithm/image-20220128100946653.png)

- [step 1] 방문하지 않은 노드 중에서 최단 거리가 가장 짧은 노드인 **1번** 노드를 처리함. 즉 ,1번 노드를 거쳐가는 방법과 다른 더 짧은 방법을 찾아 갱신하도록 함. 1번 노드에서 갈 수 있는 처리되지 않은 2,3,4번 노드는 1번 노드를 거쳐갈 때 거리가 존재하고 갱신이 가능함. 따라서 아래 테이블이 갱신되는 것을 볼 수 있음.



![image-20220128101221262](assets/dijkstra%20algorithm/image-20220128101221262.png)

- [step 2] 방문하지 않은 노드 중에서 가장 최단거리인 4번 노드를 처리함. 4와 인접한 3,5 노드가 존재함. 1번 노드는 이미 최단 거리로 처리되었음. 그리디 알고리즘의 원리. 4번 노드를 거쳐갈 때 거리는 1번 노드에서 4번까지의 거리를 더해서 갱신됨.



![image-20220128101510470](assets/dijkstra%20algorithm/image-20220128101510470.png)

- [step 3] 방문하지 않은 노드 중 가장 최단거리인 2번 노드를 처리함. 3,4 번 노드로 가는 거리가 현재 값보다 더 오래 걸리기 때문에 갱신 여부를 False로 갱신하지 않음. 4번은 이미 방문했지만, 설명상 넣음. 이미 방문 처리된 노드는 무시하게 할 수 있음.



![image-20220128102306708](assets/dijkstra%20algorithm/image-20220128102306708.png)

- [step 4] 그 다음으로 3번. 이미 처리된 2번을 제외하고 6번 노드를 찾아감. 현재 값보다 거리가 더 길기 때문에 갱신 하지 않음.



![image-20220128102345936](assets/dijkstra%20algorithm/image-20220128102345936.png)

- [step 5] 그 다음으로 6번. 인접 노드뿐만 아니라 모든 노드가 처리상태임을 볼 수 있음.





### 다익스트라 알고리즘의 특징

---

- 그리디 알고리즘: **매 상황에서 방문하지 않은 가장 비용이 적은 노드를 선택**해 임의의 과정을 반복함.
- 단계를 거치며 **<u>한번 처리된 노드의 최단 거리는 고정</u>**되어 더 이상 바뀌지 않음.
  - **한 단계당 하나의 노드에 대한 최단 거리를 확실히 찾는 것**으로 이해 가능
- 알고리즘을 수행한 뒤에 <u>테이블에 각 노드까지의 최단 거리 정보가 저장</u>됨.
  - 완벽한 형태의 최단 경로를 구하려면 소스코드에 추가적인 기능을 내야함.





### 간단한 구현 방법

---

- 단계마다 방문하지 않은 노드 중에서 최단 거리가 가장 짧은 노드를 선택하기 위해 **매 단계마다 1차원 테이블의 모든 원소를 확인(순차 탐색)**함.

```python
import sys
input = sys.stdin.readline
INF = int(1e9)  # 무한을 의미하는 값으로 10억을 설정

# 노드의 개수, 간선의 개수, 시작 노드를 입력받기
n, m, start = map(int, input().split())

# 각 노드에 연결되어 있는 노드에 대한 정보를 담는 리스트를 만들기
graph = [[] for i in range(n + 1)]
# 방문한 적이 있는지 체크하는 목적의 리스트를 만들기
visited = [False] * (n + 1)

# 최단 거리 테이블을 모두 무한으로 초기화
distance = [INF] * (n + 1)

# 모든 간선 정보를 입력받기
for _ in range(m):
    x, y, z = map(int, input().split())
    # X번 노드에서 Y번 노드로 가는 비용이 Z라는 의미
    graph[x].append((y, z))

# 방문하지 않은 노드 중에서, 가장 최단 거리가 짧은 노드의 번호를 반환


def get_smallest_node():
    min_value = INF
    index = 0  # 가장 최단 거리가 짧은 노드(인덱스)
    for i in range(1, n+1):
        if distance[i] < min_value and not visited[i]:
            min_value = distance[i]
            index = i
    return index


def dijkstra(start):
    # 시작 노드에 대해서 초기화
    distance[start] = 0
    visited[start] = True
    for j in graph[start]:
        distance[j[0]] = j[1]
    # 시작 노드를 제외한 전체 n-1 개의 노드에 대해 반복
    for i in range(n-1):
        # 현재 최단 거리가 가장 짧은 노드를 꺼내서, 방문 처리
        now = get_smallest_node()
        visited[now] = True
        # 현재 노드와 연결된 다른 인접한 노드들을 확인
        for i in graph[now]:
            cost = distance[now] + i[1]
            # 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우
            if cost < distance[i[0]]:
                distance[i[0]] = cost


# 다익스트라 알고리즘을 수행
dijkstra(start)

# 모든 노드로 가기 위한 최단 거리를 출력
for d in range(1, n + 1):
    # 도달할 수 있는 노드인 경우, 무한(infinity)라고 출력
    if distance[d] == INF:
        print('INFINITY')
    # 도달할 수 없는 거리를 출력
    else:
        print(distance[d])

>>>
3 2 1
1 2 1
3 2 1
0
1
INFINITY
```





### 간단한 구현 방법 성능 분석

---

- 총 O(V)번에 걸쳐서 최단 거리가 가장 짧은 노드를 매번 선형 탐색해야 한다.
- 따라서 전체 시간 복잡도는 O(V^2)이다.
- 일반적으로 코딩 테스트의 최단 경로 문제에서 전체 노드의 개수가 5,000개 이하라면 이 코드로 문제를 해결할 수 있다.
  - 하지만 노드의 개수가 10,000개를 넘어가는 문제라면?
  - - 우선 순위 큐를 사용





### 개선된 구현 방법

---

- 단계마다 <u>방문하지 않은 노드 중에서 최단 거리가 가장 짧은 노드를 선택</u>하기 위해 **힙(Heap)** 자료구조를 이용한다.
- 다익스트라 알고리즘이 동작하는 **기본 원리는 동일**하다.
  - 현재 가장 가까운 노드를 저장해 놓기 위해서 힙 자료구조를 추가적으로 이용한다는 점이 다르다.
  - 현재의 차단 거리가 가장 짧은 노드를 선택해야 하므로 최소 힙을 사용한다.





### 동작 과정 살펴보기(우선순위 큐)

---

![image-20220128113400761](assets/dijkstra%20algorithm/image-20220128113400761.png)

**[초기 상태]** 그래프를 준비하고 출발 노드를 설정하여 우선순위 큐에 삽입



![image-20220128113756932](assets/dijkstra%20algorithm/image-20220128113756932.png)

**[step 1]** 우선 순위 큐에서 원소를 꺼낸다. 1번 노드는 아직 방문하지 않았으므로 이를 처리한다. 노드 1을 거쳐가는 것으로 해서 그 인접 노드에 대해 거리를 알 수 있다. 2,3,4번 노드의 거리를 더 작은 값으로 갱신함. 

우선 순위 큐에 넣어줄땐 갱신된 데이터를 넣어줌.



![image-20220128114034852](assets/dijkstra%20algorithm/image-20220128114034852.png)

**[step 2]** 우선순위 큐에서 원소를 꺼냄. 4번 노드는 아직 방문하지 않았으므로 이를 처리함. 마찬가지로 인접 노드 3,5번 노드와의 거리를 구하고 더 작다면 갱신함.

...

...

...

![image-20220128115037525](assets/dijkstra%20algorithm/image-20220128115037525.png)

**[step 6]** 위와 같은 과정을 반복하다가 우선 순위 큐에서 원소를 꺼내는데 3번 노드는 이미 방문했으므로 무시함.



![image-20220128115056332](assets/dijkstra%20algorithm/image-20220128115056332.png)

**[step 7]** 우선순위 큐에서 원소를 꺼냄. 6번 노드는 아직 방문하지 않았으므로 이를 처리함.





### 개선된 구현 방법 코드

---

```python
import heapq
import sys
input = sys.stdin.readline
INF = int(1e9) # 무한을 의미하는 값으로 10억을 설정

# 노드의 개수, 간선의 개수, 시작 노드를 입력받기
n, m, start = map(int, input().split())
# 각 노드에 연결되어 있는 노드에 대한 정보를 담는 리스트를 만들기
graph = [[] for i in range(n + 1)]
# 최단 거리 테이블을 모두 무한으로 초기화
distance = [INF] * (n + 1)

# 모든 간선 정보를 입력받기
for _ in range(m):
    x, y, z = map(int, input().split())
    # X번 노드에서 Y번 노드로 가는 비용이 Z라는 의미
    graph[x].append((y, z))

def dijkstra(start):
   q = []
   # 시작 노드로 가기 위한 최단 경로는 0으로 설정하여, 큐에 삽입
   heapq.heappush(q, (0, start))
   distance[start] = 0
   while q: # 큐가 비어있지 않다면
        # 가장 최단 거리가 짧은 노드에 대한 정보를 꺼내기
        dist, now = heapq.heappop(q)
        if distance[now] < dist:
            continue
        # 현재 노드와 연결된 다른 인접한 노드들을 확인
        for i in graph[now]:
            cost = dist + i[1]
            # 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))

# 다익스트라 알고리즘을 수행
dijkstra(start)

# 도달할 수 있는 노드의 개수
count = 0
# 도달할 수 있는 노드 중에서, 가장 멀리 있는 노드와의 최단 거리
max_distance = 0
for d in distance:
    # 도달할 수 있는 노드인 경우
    if d != 1e9:
        count += 1
        max_distance = max(max_distance, d)

# 시작 노드는 제외해야 하므로 count - 1을 출력
print(count - 1, max_distance)
```





### 개선된 구현 방법 성능 분석

---

- 힙 자료구조를 이용하는 다익스트라 알고리즘의 시간 복잡도는 **O(ElogV)**이다.
- 노드를 하나씩 꺼내 검사하는 반복문(while문)은 노드의 개수 V이상의 횟수로는 처리되지 않는다.
  - 결과적으로 현재 우선순위 큐에서 꺼낸 노드와 연결된 다른 노드들을 확인하는 총횟수는 최대 간선의 개수(E)만큼 연산이 수행될 수 있다.
- 직관적으로 <u>전체 과정은 E개의 원소를 우선순위 큐에 넣었다가 모두 빼내는 연산과 매우 유사</u>하다.
  - 시간 복잡도를 O(ElogE)로 판단할 수 있다.
  - 중복 간선을 포함하지 않는 경우에 이를 O(ElogV)로 정리할 수 있다.
    - ElogE -> ElogV^2 -> 2ElogV -> ElogV