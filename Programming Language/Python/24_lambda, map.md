### lambda

---

**`lambda *arguments* : *expression*`** (lambda 매개변수1, 매개변수2, ... : 수식)

- 람다 함수는 익명 함수다.

  - 익명 함수: 말 그래도 이름이 없는 함수. 함수의 이름을 부여하지 않고, 변수명에 함수 코드를 저장하는 구현 방식이다.

- 람다 함수는 여러 인수를 사용할 수 있지만 표현식은 하나만 허용한다.
- if, while 문은 허용하지 않는다.

- 실무적으로는 코드의 간결함, 지연 연산을 통한 퍼포먼스 향상, 그리고 기존 이터레이션 관련 코드를 구현하는 데 있어 불필요한 부분들을 제거할 수 있다.

```python
# Example 1
Add 10 to argument a, and return the result:

lambda a : a+10
x = lambda a : a+10
print(x(5))
>>> 15
```

```python
# Example 2
Multiply argument a with argument b and return the result:

lambda a,b : a * b
```

```python
# Example
Summarize argument a, b, and c and return the result:

lambda a,b,c : a + b + c
```

```python
# 람다표현식으로 만들기
lambda n1,n2 : n1+n2

# 람다표현식 사용하기
(lambda n1,n2 : n1+n2)(1,2)

------------------------------------------------------------------------
# 람다표현식을 프로그램 내에서 재사용하고 싶다면, 람다표현식을 변수에 담아서 사용한다.
lambda_plus = lambda n1,n2 : n1+n2

# 변수로 람다표현식 담아 호출하기
print(lambda_plus(1,2))
print(lambda_plus(3,4))
```



### map()

**`map(function, iterable, ...)`**

- list(map(함수, 리스트))

 - tuple(map(함수, 튜플))

- | Parameter                                                    |
  | ------------------------------------------------------------ |
  | *function*: 필수. 각 항목에 대해 실행할 함수                 |
  | *iterable*:  반복 가능한 객체. 필수. 시퀀스, 컬렉션 또는 반복 개체다. 원하는 만큼 iterable을 보낼 수 있다. |

- iterable의 모든 항목에 함수를 적용하고 결과 목록을 반환한다.
- **수행 결과는 map object(맵 객체) 이다.**
  - **맵 객체는 iterable의 각 항목에 함수를 적용한 결과를 포함한다.**
  - **list(), tuple() 을 사용하여 맵 객체를 list, tuple 로 변환**
- 추가 iterable 인수가 전달되면 function은 그만큼 많은 인수를 가져와야 하며 모든 iterable의 항목에 병렬로 적용된다.
- `map()`에는 리스트 뿐만 아니라 모든 반복 가능한 인수를 넣을 수 있다.
- 여러 인수가 있는 경우 `map()`은 모든 반복 가능한 항목의 해당 항목을 포함하는 튜플로 구성된 목록을 반환한다. (일종의 전치 작업)

```python
# Example 1
Make new fruits by sending two iterable objects into the function:

def myfunc(a, b):
  return a + b

x = map(myfunc, ('apple', 'banana', 'cherry'), ('orange', 'lemon', 'pineapple'))

print(x)
>>> <map object at 0x2b91a6a022b0>

#convert the map into a list, for readability:
print(list(x))
```

```python
# Exmaple 2
Change the word 'a' to the capital 'A' by using lambda with replace function:

f1 = lambda x: x.replace('a','A')
map(f1,['abcd','abcde','aabb'])

x = map(f1,['abcd','abcde','aabb'])
print(list(x))
```



