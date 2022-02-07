참고) [백준/입출력과 사칙연산](https://www.acmicpc.net/step/1)

참고) https://wikidocs.net/25



### input

---

`a = input()` : **input()은 입력되는 모든 것을 문자열(`str`)로 취급한다.**



**응용 1)**

```python
# 백준 1000번 문
a,b = input().split()	# a,b를 동시에 입력받으면서 split()으로 구분해준다.
a = int(a)	# a를 정수화
b = int(b)	# b를 정수화
```

---



### print

---



- **큰따옴표(")로 둘러싸인 문자열은 + 연산과 동일하다**

```python
>>> print("life" "is" "too short") # ①
lifeistoo short
>>> print("life"+"is"+"too short") # ②
lifeistoo short
```



- **문자열 띄어쓰기는 콤마로 한다**

```python
>>> print("life", "is", "too short")
life is too short
```



- **한 줄에 결괏값 출력하기**
  - 한 줄에 결괏값을 계속 이어서 출력하려면 `end` 파라미터를 사용해 끝 문자를 지정해야 한다.
  - 공백을 지정해서 문자열을 끝내는 것이다. `end`파라미터에 값을 넣으면 그 값이  문자로 지정된다.

```python
>>> for i in range(10):
...     print(i, end=' ')
...
0 1 2 3 4 5 6 7 8 9
```



- **여러 줄 한번에 출력하기**
  - `print`함수를 다른 줄에 입력하든가, 홑따옴표 세개(''') 혹은 쌍따옴표 세개(""")로 묶는다.

```python
print('''
자세히 보아야 예쁘다.
오래 보아야 사랑스럽다.
너도 그렇다.
''')
```



- **응용**

```python
# 백준 10171번 문
# 고양이 출력하기
\    /\
 )  ( ')
(  /  )
 \(__)|

>>>
print("\\    /\\")
print(" )  ( ')")
print("(  /  )")
print(" \\(__)|")

# 역슬래시 \는 두 번 써야 인식된다.
```



- **f 스트링으로 출력하기**

```python
# 1)
a = input()
print(f'{a}가 출력됩니다.')

# 2)
a,b = input().split()
a = int(a)
b = int(b)
print(f'{a},{b}')
```

```python
실수 자리수 지정은 딕셔너리 형태로 지정. #백준 4344
print(f'{result}:.2f')
```



- **여러 값 입력하기**

```python
print('%d * %d = %d' % (N,i,N*i))
# 여러 값을 출력하고 싶으면 ()로 묶어 줘야함.
```



- **여러 Prints를 한 줄에 사용하기 `stdout.write()` Method of the `sys` Module in Python**

```python
import sys	# sys 모듈 import 필수

sys.stdout.write('hello...')
sys.stdout.write('how are you?')
>>>
hello...how are you?
```

