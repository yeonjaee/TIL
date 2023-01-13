## random

random 모듈을 사용하기 위해 라이브러리를 `import random` 한다.



```python
# random() 함수
# 0 ~1 사이의 무작위 실수값을 리턴한다.
random.random()

# uniform() 함수
# 2개의 숫자 사이의 무작위 실수값을 리턴한다. 2번째 인자는 포함하지 않는다. # num1 =< x < num2
random.uniform(num1,num2)

# randint() 함수
# 2개의 숫자 사이의 무작위 정수값을 리턴한다. 2번째 인자로 넘어온 정수도 범위에 포함시킨다.
random.randint(num1, num2)

# randrange() 함수
#  2개의 숫자 사이의 무작위 정수값을 리턴한다.2번째 인자는 포함하지 않는다.
randrange(num1, num2) 

# choice() 함수
# 랜덤하게 하나의 원소를 선택한다.
>>> random.choice('abcde')
>>> 'b'

# sample() 함수
# 랜덤하게 여러 개의 원소를 선택한다.
>>> random.sample([1, 2, 3, 4, 5],  3)
[3, 2, 4]

# shuffle() 함수
# 원본의 원소의 순서를 랜덤하게 바꾼다.
# 리턴 값이 없다
>>> list = [1,2,3,4,5]
>>> random.shuffle(list)
>>> [2,3,5,1,4]
```

