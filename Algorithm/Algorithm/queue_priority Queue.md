#### 우선순위 큐(priority queue)

---

우선순위 큐는 <u>우선순위가 가장 높은 데이터를 가장 먼저 삭제하는 자료구조</u>이다. 데이터를 **우선순위에 따라** 처리하고 싶을 때 사용한다.



![image-20220117112408831](assets/priority%20queue/image-20220117112408831.png)

- 우선순위 큐를 구현하는 방법은 다양하다.
  1) 단순히 <u>리스트를 이용하여 구현</u>한다.
  2) <u>힙(heap)을 이용하여 구현</u>한다.

- 데이터의 개수가 N개일 때, 구현 방식에 따라서 시간 복잡도를 비교

  

  ![image-20220117113913086](assets/priority%20queue/image-20220117113913086.png)

- 단순히 N개의 데이터를 힙에 넣었다가 모두 꺼내는 작업은 정렬과 동일하다. (힙 정렬)
  - 이 경우 시간 복잡도는 O(NlogN) 이다.

---

##### 힙(heap) 의 특징

- 힙은 **완전 이진 트리** 자료구조의 일종이다.
- 힙에서는 항상 루트 노드를 제거한다.
- **최소 힙(min heap)**
  - 루트 노드가 가장 작은 값을 가진다
  - 따라서 값이 작은 데이터가 우선적으로 제거된다.
- **최대 힙(max heap)**
  - 루트 노드가 가장 큰 값을 가진다
  - 따라서 값이 큰 데이터가 우선적으로 제거된다.





##### 최소 힙 구성 함수: Min-Heapify()

**(상향식)** 부모 노드로 거슬러 올라가며, 부모보다 자신의 값이 더 작은 경우에 위치를 교체한다.

![image-20220117114348922](assets/priority%20queue/image-20220117114348922.png)



##### 힙에 새로운 원소가 삽입될 때

새로운 원소가 삽입되었을 때 O(logN)의 시간 복잡도로 힙 성질을 유지하도록 할 수 있다.

![image-20220117114517768](assets/priority%20queue/image-20220117114517768.png)



##### 힙에 원소가 제거될 때

**(하향식)** 원소가 제거되었을 때 O(logN)의 시간 복잡도로 힙 성질을 유지하도록 할 수 있다. 이후에 **루트 노드**에서부터 Heapify() 를 진행한다.

![image-20220117114704973](assets/priority%20queue/image-20220117114704973.png)



##### 우선순위 큐 라이브러리를 활용한 힙 정렬 구현 예제(python)

```python
import sys
import heapq
input = sys.stdin.readline

def heapsort(iterable):
    h = []
    result = []
    # 모든 원소를 차례대로 힙에 삽입
    for value in iterable:
        heapq.heappush(h, value)
    # 힙에 삽입된 모든 원소를 차례대로 꺼내어 담기
    for i in range(len(h)):
        result.append(heapq.heappop(h))
    return result

n = int(input())
arr = []

for i in range(n):
    arr.append(int(input()))

res = heapsort(arr)

for i in range(n):
    print(res[i])
```
