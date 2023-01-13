### 단순 연결 리스트란?

---

`떨어진 곳에 위치한 데이터를 화살표로 연결한 것`

- 논리적으로는 선형 리스트와 동일하다.
- 노드들이 물리적으로 떨어진 곳에 위치한다. 때문에 각 노드의 번지도 순차적이지 않다.
- 해당 노드의 앞뒤 링크만 수정하면 되므로 선형 리스트와는 달리 오버헤드가 거의 발생하지 않는다.

---

- **원리**

  - 노드 구조

    - 단순 연결 리스트는 다음 데이터를 가리키는 링크가 더 필요
    - 노드는 데이터와 링크로 구성된 항목

    > ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbnjuRH%2FbtrWbcE6VHh%2FIcDi0G0pvuciLrHo3upyCk%2Fimg.png)

  - 노드 삽입
    
    > ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeIsFGw%2FbtrWbT5Q8eh%2F7KFTzdbiHCt2V4ovgmRlwK%2Fimg.png)
  
  
  
  
  
  - 노드 삭제
    
    > ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEeWZU%2FbtrWbq4bR0u%2Fush0QWXyTSPDjc96goD0Xk%2Fimg.png)

---

### 노드 생성 및 연결

클래스를 이용하여 Node 데이터형 정의

```python
class Node():				# Node 라는 데이터형을 만듬
    def __init__(self):		# 데이터형 생성 함수
        self.data = None	# 데이터 저장
        self.link = None	# 링크 저장
```

첫 번째 노드 생성

```python
node1 = Node()
node1.data='다현'
```

> ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbmkn0G%2FbtrWbqJQMWf%2FUGCag9auFVG97WUMVKB28k%2Fimg.png)

두 번째 노드 생성 및 첫 번재 노드와 연결

```python
node2 = Node()
node2.data = '정연'
node1.link = node2	# 첫 번째 노드의 링크에 두 번째 노드를 연결
```

> ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcLQs3n%2FbtrWeYEz2nF%2FHZAKA5LcJIBrTZTxoiA0Lk%2Fimg.png)

데이터가 5개인 단순 연결 리스트 생성

```python
class Node() :
	def __init__ (self) :
		self.data = None
		self.link = None

node1 = Node()
node1.data = "다현"

node2 = Node()
node2.data = "정연"
node1.link = node2

node3 = Node()
node3.data = "쯔위"
node2.link = node3

node4 = Node()
node4.data = "사나"
node3.link = node4

node5 = Node()
node5.data = "지효"
node4.link = node5

print(node1.data, end = ' ')
print(node1.link.data, end = ' ')
print(node1.link.link.data, end = ' ')
print(node1.link.link.link.data, end = ' ')
print(node1.link.link.link.link.data, end = ' ')
```

> ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fl19xs%2FbtrWdoDRodn%2FGJkKY4GpKpq9E6EHK9XXV1%2Fimg.png)

print 부분 과정을 간략하게

```python
# 첫 번째 노드를 현재(current)노드로 지정하고,
# 현재 노드의 데이터인 '다현'을 출력
current = node1
print(current.data, end = ' ')

# while 문으로 반복
# 현재 노드의 링크가 비어 있지 않다면,
# 현재 노드를 현재 노드의 링크가 가르키는 노드로 변경하고,
# 현재 노드의 데이터인 '정연'을 출력
while current.link != None :
	 current = current.link
	 print(current.data, end = ' ')
```



---

### 노드 삽입: 중간에 데이터 삽입

```python
newNode = Node()
newNode.data = '나연'
newNode.link = node2.link # node2의 링크
node2.link = newNode
```





### 노드 삭제: 중간 데이터 삭제

```python
node2.link = node3.link	# 삭제할 node3의 링크를 바로 앞 node2의 링크로 복사. 그러면 node 2의 링크는 node 4를 가르킨다.
del(node3)	#node3 삭제
```





### 단순 연결 리스트의 일반 형태

---

전역 변수로 `head`는 첫 번째 노드를 가리키고 , `current` 는 지금 처리 중인 노드를 가리키며 , `pre` 은 현재 처리 중인 노드의 바로 앞 노드를 가리킨다고 하자.

```python
memory = []
head, current,pre = None, None, None
```

그런 다음 데이터 입력을 해보자

```python
# 1번째 데이터 입력 과정
node = Node() # 빈 노드 생성
node.data = dataArray[0] # 1번째 노드
head = node() #1번째 노드를 헤드로 지정
memory.append(node) # 노드를 메모리에 넣음

# 2번째 데이터 입력 과정
pre = node # 기존 노드를 임시 저장
node = Node()
node.data = data # 2번째 이후 노드
preNode.link = node # 이전의 링크를 새 노드에 대입
memory.append(node) # 새 노드 메모리에 넣음
```

위와 같은 식으로 작성하면 되긴 하는데, 너무 오래걸린다. 때문에 배열에 저장된 데이터를 모두 꺼내 단순 연결 리스트를 생성하는 방법이 필요하다.

```python
## 클래스와 함수 선언 부분 ##
class Node() :
	def __init__ (self) :
		self.data = None
		self.link = None

def printNodes(start) :
	current = start
	if current == None :
		return
	print(current.data, end = ' ')
	while current.link != None:
		current = current.link
		print(current.data, end = ' ')
	print()

## 전역 변수 선언 부분 ##
memory = []
head, current, pre = None, None, None
dataArray = ["다현", "정연", "쯔위", "사나", "지효"]

## 메인 코드 부분 ##
if __name__ == "__main__" :

	node = Node()		# 첫 번째 노드
	node.data = dataArray[0]
	head = node
	memory.append(node)

	for data in dataArray[1:] :	# 두 번째 이후 노드
		pre = node
		node = Node()
		node.data = data
		pre.link = node
		memory.append(node)

	printNodes(head)
```







### 노드 삽입: 첫 번째 노드 삽입

---

0. 맨 앞에 노드를 삽입하기 전 초기 상태

![image-20220103142708105](assets/single%20linked%20list/image-20220103142708105.png)

1. 새 노드(화사 노드)를 생성한다

![image-20220103142723662](assets/single%20linked%20list/image-20220103142723662.png)

2. 새 노드의 링크로 헤드 (head) 노드가 가리키는 노드를 지정한다 .

![image-20220103142756787](assets/single%20linked%20list/image-20220103142756787.png)

3. 헤드 노드를 새 노드로 지정한다 .

![image-20220103142810359](assets/single%20linked%20list/image-20220103142810359.png)





```python
node = Node()
node.data = '화사'
node.link = head
head = node
```



### 노드 삽입: 중간 노드 삽입

---

1. 헤드에서 시작해서 현재 노드가 사나인지 확인한다

   ![image-20220103163758841](assets/single%20linked%20list/image-20220103163758841.png)

2. 현재 노드를 이전 (pre) 노드로 지정하고 , 현재 노드를 다음 노드로 이동한다 . 그리고 현재 노드가 사나인지 확인한다.

   ![image-20220103163821608](assets/single%20linked%20list/image-20220103163821608.png)

3. 현재 노드가 사나일 때까지 2단계를 반복한다 .

4. 현재 노드가 사나라면 우선 새 노드(솔라 노드) 를 생성한 후 이전 노드의 링크를 새 노드의 링크로 지정한다.

   ![image-20220103163921735](assets/single%20linked%20list/image-20220103163921735.png)

5. 이전 노드의 링크를 새 노드로 지정한다

   ![image-20220103163926312](assets/single%20linked%20list/image-20220103163926312.png)

```python
current = head
while 마지막 노드까지:
    pre = current
    current = current.link
    if current.data == '사나':
        node = Node()
        node.data = "솔라"
        node.link = current
        pre.link = node
```







### 노드 삽입: 마지막 노드 삽입

---

![image-20220103164214791](assets/single%20linked%20list/image-20220103164214791.png)

```python
node = Node()
node.data = "문별"
current.link = node
```
