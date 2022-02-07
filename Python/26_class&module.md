## [1] 클래스

클래스와 객체를 이해하기 위해 간단한 예로 설명한다.

- 3가지 속성과 3가지 기능이 있는 자동차 객체를 찍어내기 위한 틀을 만든다.
- 속성 : brand, model, color
- 기능 : turn_on, turn_off, drive



1) **자동차 도면 : 클래스(class)**



2) **자동차 도면으로 만든 자동차: 객체(object)**

   - 객체는 객체마다 고유한 성격을 가졌으며, 독립적이다. 동일한 클래스로 만든 객체들은 서로 전혀 영향을 주지 않는다.

   - 객체는 속성과 메소드로 구성된다.



다음은 자동차 클래스를 만들어보자.

---

### 클래스 만들기

```python
class car:
    pass
```

위의 클래스는 아무 기능도 갖고 있지 않은 가장 간단한 클래스이다.  하지만 이와 같은 클래스도 객체는 무수히 만들어 낼  수 있다.

```python
>>> a = car()
>>> b = car()
```

car()의 결과값을 돌려받는 a,b가 객체이다.

---

### 클래스 구조 만들기

클래스를 무작정 만드는 것보다 클래스로 만든 객체를 중심으로 어떻게 동작하게 할 것인지 미리 구상을 한 후에 생각한 것들을 하나씩 해결하면서 완성해 나가는 것이 좋다.

```python
class 클래스명:

def __init__(self, 매개변수1, 매개변수2):  # 생성자 
# 속성 초기화 
def 메소드1(self, 매개변수1, 매개변수2):
  메소드1 내용
def 메소드1(self, 매개변수1, 매개변수2):
  메소드1 내용

- self : 메소드를 호출한 객체를 받는다.
- 객체의 속성은 객체 안의 변수에 저장된다.
- 객체의 이름 다음에 점(.)을 찍고 변수 이름을 적는다. 예) car.brand = "현대자동차"
- 객체의 메소드(기능) 객체 안에 정의된 함수
- 객체의 메소드는 객체 이름 다음에 점(.)을 찍어 호출한다. 예) car.turn_on()
```

```python
class Car:
    def __init__(self, b,m,c):
        self.brand = b
        self.model = m
        self.color = c
        
        print(self.brand, self.model, self.color, '출고')
    
    def turn_on(self):
        print(self.brand, '시동을 겁니다.')
        
    def turn_off(self):
        print(self.brand, '시동을 끕니다.')
    
    def drive(self):
        print(self.brand, '주행중입니다.')
```

---

### 객체 생성하기

객체명 = 클래스명(매개변수1,매개변수2,...)

```python
car1 = Car('현대자동차','소나타','화이트')
car2 = Car('르노삼성','SM7','블랙')

'''
현대자동차 소나타 화이트 출고
르노삼성 SM7 블랙 출고
'''
```

---

### 메서드 호출하기

객체명.메소드명(매개변수1,매개변수2,...)

```python
car1.turn_on()
car1.turn_off()
car1.drive()

print()

car2.turn_on()
car2.turn_off()
car2.drive()

>>>
'''현대자동차 시동을 겁니다.
현대자동차 시동을 끕니다.
현대자동차 주행중입니다.

르노삼성 시동을 겁니다.
르노삼성 시동을 끕니다.
르노삼성 주행중입니다.
'''
```

---





## [2] 모듈

모듈이란 함수나 변수 또는 클래스를 모아 놓은 파일이다. 모듈은 프로그램에서 공통적으로 사용되는 변수, 수, 클래스들을 별도로 모아서 사용한다. 다른 파이썬 프로그램에서 불러와 사용할 수 있게끔 만든 파이썬 파일이라고도 할 수 있다. `import` 하는 것도 모듈을 불러오는 것이다.

- 모듈의 별칭 지정 사용

  - import 모듈명 as 별칭

  - 별칭.함수명()

  - 별칭.변수명

  - 별칭.클래스명()

  - ```python
    # myCalc.py
    def get_plus(a,b):
        return a+b
    def get_minus(a,b):
        return a-b
        
    import myCalc
    print(myCalc.get_plus(1,2))
    print(myCalc.get_minus(1,2))
    ```

    `myCalc.py` 파일, 즉 모듈을 따로 저장하여 저장된 디렉터리로 이동한 다음 예제를 진행해야 한다. 그래야만 모듈을 읽어올 수 있다.

  - **모듈 별칭 사용하기**

    import 모듈명 as 별칭

    별칭.함수명()

    ```python
    import myCalc as calc
    print(calc.get_plus(1,2))
    print(calc.get_minus(1,2))
    ```

  - **모듈 이름 없이 함수 사용하기**

    from 모듈 이름 import 모듈 함수

    ```python
    from myCalc import get_plus, get_minus
    print(get_plus(1,2))
    print(get_minus(1,2))
    ```

    