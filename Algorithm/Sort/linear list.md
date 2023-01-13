#### 선형 리스트(Linear List)

---

선형 리스트는 일정한 순서에 의해 나열된 자료 구조이다.

- 입력 순서대로 저장하는 데이터에 적합하다.
- (배열) 공간을 절약할 수 있고, 접근이 빠르다.
- 삽입/삭제에서 오버헤드가 발생할 확률이 크다.

- 선형 리스트는 <u>배열</u>을 이용하는 **연속 리스트**(contiguous list)와 <u>포인터</u>를 이용하는 **연결 리스트**(linked list)로 구분된다.

- **연속 리스트(Contiuous List)**

  - 배열을 이용하는 리스트로, 연속되는 기억장소에 저장되는 자료구조이다.
  - 기억장소를 연속적으로 배정받기 때문에 기억장소 이용 효율은 밀도가 1로서 가장 좋다.
  - 중간에 데이터를 삽입하기 위해서는 연속된 빈 공간이 있어야 하며, 삽입/삭제 시 자료 이동이 필요하다.

  

  ![image-20220117144829169](assets/linear%20list/image-20220117144829169.png)



- **연결 리스트(Linked List)**

  - 자료들을 반드시 연속적으로 배열시키지는 임의의 기억공간에 기억시키되, 자료 항목의 순서에 따라 노드의 포인터 부분을 이용하여 서로 연결시킨 자료 구조이다.

  - 기억 공간이 연속적으로 놓여 있지 않아도 저장할 수 있기에 노드의 삽입/삭제가 용이하다.

  - 연결을 위한 링크(포인터) 부분이 필요하기 때문에 순차 리스트에 비해 기억 공간 효율성이 좋지 않고, 포인터를 찾는 시간이 필요하기 때문에 접근 속도가 느리다.

  - 중간 노드 연결이 끊어지면 그 다음 노드를 찾기가 힘들다.

    

![img](assets/linear%20list/408px-Singly-linked-list.svg.png)







#### 배열을 이용하여 선형 리스트 생성 및 데이터 입력

---

- **배열 생성**

  `katok = []`

- **첫 번째 데이터 입력**

![image-20220103114443712](assets/linear%20list/image-20220103114443712.png)

```python
##1
katok.append(None)

##2
kLen(배열길이) = len(katok)

##3
katok[kLen-1] = '다현'

print(katok)
>>> ['다현']
```



- **두 번째 데이터 입력**

![image-20220103130227858](assets/linear%20list/image-20220103130227858.png)

```python
##1
katok.append(None)

##2
kLen(배열길이) = len(katok)

##3
katok[kLen-1] = '정연'

print(katok)
>>> ['다현','정연']
```



- **함수로 구현**

```python
def add_data(friend):
    katok.append(None)
    kLen = len(katok)
    katok[kLen-1] = friend
```



---

### 데이터 삽입

- **배열 생성**

​		`katok = ['다현','정연','쯔위','사나','지효']`



- **'모모' 데이터 @끝에 삽입**

```python
katok = ['다현','정연','쯔위','사나','지효']
katok.append(None)  # 빈칸 추가
katok[5] = '모모'
print(katok)
>>> ['다현', '정연', '쯔위', '사나', '지효', '모모']
```



- **'미나' 데이터 @중간에 삽입**

  ```
  katok.append(None)  # 빈칸 추가
  katok[6] = katok[5]
  katok[5] = None
  katok[5] = katok[4]
  katok[4] = None
  katok[4] = katok[3]
  katok[3] = None
  katok[3] = '미나'
  print(katok)
  
  >>> ['다현', '정연', '쯔위', '미나', '사나', '지효', '모모']
  ```

  *그런데 한줄 한줄 쓰면 코드작성 시간이 너무 길다. 따라서, 함수를 생성해보자.*

  - **함수 구현**

  ```python
  def insert_data(position,friend):
    katok.append(None)
    kLen = len(katok)
    for 현재위치 in range(마지막위치,지정위치,-1):
        katok[현재위치] = katok[현재위치-1]
        katok[현재위치-1] = None
    katok[지정위치] = friend
  ```

  > for 문을 그림으로.
  >
  > ![image-20220103132454983](assets/linear%20list/image-20220103132454983.png)
  >
  > ![image-20220103132518053](assets/linear%20list/image-20220103132518053.png)

  ```python
  def insert_data(position,friend):
      katok.append(None)
      kLen = len(katok)
      for i in range(kLen-1,position,-1):
          katok[i] = katok[i-1]
          katok[i-1] = None
      katok[position] = friend
  ```

  ---



### 데이터 삭제

- 중간 데이터 삭제

![image-20220103132713071](assets/linear%20list/image-20220103132713071.png)

![image-20220103132730269](assets/linear%20list/image-20220103132730269-16440675168801.png)



```python
##2 지정위치 데이터 삭제
katok[지정위치] = None

##3~4 지정위치 다음(2번 자리)에 있는 데이터를 지정위치(1번 자리)로 이동하고, 2번은 빈칸으로 만든다.
## 다시 3번 자리를 2번 자리로 이동하고, 3번 자리는 빈칸으로 만든다. 배열의 맨 마지막 위치가 앞 칸으로 이동할 때까지 반복한 후 멈춘다.

for 현재위치 in range(지정위치+1, 마지막위치+1):
	katok[현재위치-1] = katok[현재위치]
	katok[현재위치] = None
    
##5 배열 맨 마지막 위치를 완전히 제거
del(katok[지정위치])
```

- 함수 구현

```python
def delete_data(position):
    katok[position] = None
    kLen = len(katok)
    for i in range(position+1, kLen,1):
        katok[i-1] = katok[i]
        katok[i] = None
    del(katok[kLen-1])
```

---

