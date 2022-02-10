# 함수 정의하고 호출하기



```python
# 함수 정의 
def introduce():
    print('안녕하세요!')
    print('저의 이름은 파이썬입니다.')
    
# 코드는 위에서부터 아래로 순차적으로 실행된다.
# 함수를 호출하는 시점에 함수가 정의되어 있지 않으면 에러 발생
```



#### 매개변수 전달

```python
def introduce(name):
    print('안녕하세요!')
    print('저의 이름은, '+name+'입니다.')

introduce('유재석')
introduce('강호동')

>>>
안녕하세요!
저의 이름은, 유재석입니다.
안녕하세요!
저의 이름은, 강호동입니다.
```



##### 매개변수 여러개 전달

**'+$+' 로 추가.**

```python
## 자기소개 ##
name='나연'
age = 26
print('안녕하세요!')
print('저의 이름은, '+name+'입니다.')	
print('나이는, '+str(age)+'살입니다.')
```





#### 위치인수

- 기본적인 인수 전달방법이다.
- 함수에 정의된 매개변수와 순서에 맞게 짝을 맞추어 인수를 전달한다.

```python
def greet(name, msg):
    print('안녕',name,msg)

greet('친구','오랜만이야')
```



#### 디폴트인수

* 함수를 정의할 때 매개변수에 디폴트값을 지정하면 디폴트값이 지정된 인수를 생략할 수 있다.

```python
def greet(name, msg='오랜만이야'):
    print('안녕!',name,msg)

greet('친구')
```

* 디폴트 인수는 기본 위치 인수를 다 적은 다음에 적어야 한다.

```python
def greet(name, msg):
    name = '친구'
    print('안녕!',name,msg)

greet('나야','반가워')
```





#### 키워드인수

* 함수를 호출할 때 인수의 이름을 명시하면, 순서를 바꾸어 전달할 수 있다.
* 키워드 인수는 기본 위치 인수를 다 적은 다음에 적어야 한다.

```python
def get_minus(x,y,z):
    return x-y-z

print(get_minus(5,10,15))
print(get_minus(5,z=15,y=10))
```



#### 가변인수

* 인수를 하나의 튜플이나 리스트로 전달한다.

```python
# 가변적인 수를 하나의 리스트/튜플로 받아서 수의 평균을 리턴하는 함수  
def average(args):
    return sum(args)/len(args)

print(average([1,2,3]))
print(average((1,2,3,4,5)))
```

* 매개변수에 '*'를 붙이면 여러개의 인수를 하나의 튜플로 받는다.
* 인수의 갯수는 가변적이다.

```python
# 가변적인 수를 받아서 수의 평균을 리턴하는 함수

def average(*val):
    return sum(val)/len(val)
average(1,2,3)
```





#### 전역변수
* 함수 밖에서 생성된 변수
* 함수 내에서도 사용할 수 있다.

```python
greet = 'hello'

def sayhello():
    print(greet)
    
sayhello()
>>>
hello
```



#### 지역변수
* 함수 내에서 생성된 변수
* 함수 내에서만 사용할 수 있다.

```python
def saygoodbye():
    greet2 = 'bye'
    print(greet2)
saygoodbye()
>>>
bye
```





#### 함수 안에서 전역변수 값 변경하기

* 함수 내에서 전역변수 값을 변경하려면 'global' 키워드를 함께 사용하여야 한다.
* global을 사용하지 않으면 동일한 이름의 지역변수가 생성되어 사용된다.

```python
greet = 'hello'

def sayhello():
    global greet2
    greet2 = 'goodbye'
    print(greet, greet2)
    
sayhello()
print(greet2)

>>>
hello goodbye
goodbye
```

