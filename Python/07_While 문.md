## Iterative Statement (반복문)

- 파이썬에서는 while, for 2가지의 statement를 제공한다.

- while문은 ***조건을 만족할 때 까지 반복***한다.

- ```python
  while (조건):
  <statement1>
  <statement2>
  <statement3>
  
  # 조건이 만족하는 동안(while) statement 1, 2, 3을 반복한다.
  ```

- **무한 루프문**

  ```python
  while True: 
   수행할 문장1 
   ...
  
  # while 문 안의 문장들은 무한하게 수행된다.
  # 빠져나가려면 [Ctrl+C]를 눌러 빠져나간다.
  ```

- **반복제어문**
  1.continue : 특정 조건일 경우 반복문 스킵

  2.break : 특정 조건일 경우 반복문 종료(정지조건)

  3.exit: 특정 조건일 경우 프로그램 종료

  4.pass:문법적으로 오류가 발생시키지 않기 위해 자리를 채우는 역할


- **try, except**

  While 문에서 EOF 에러가 발생할 때 해결할 수 있는 코드이다. 에러가 발생되도 프로그램이 실행되도록 해준다. **try** 구문에는 에러가 발생할 가능성이 있는 코드를 작성하고, **except** 구문에는 예외 값을 입력했을 때 실행할 코드를 작성한다.

   ```python
   # 백준 10951
   
   while True:
       try:
           a,b = map(int,input().split())
           print(a+b)
       except:
           break							# 정수가 아닌 값을 입력하면 예외 발생 처리되어 break
   ```

  

**[문제]**

[1] 구구단

> ```python
> # 2단을 while문으로 구현.
> >>> number = 1
> >>> while number < 10:
> >>>    print("2 x %d = %d" % (number, 2*number)) #number가 1부터 9까지 반복
> >>>    number = number + 1 # number += 1
> 2 x 1 = 2
> 2 x 2 = 4
> 2 x 3 = 6
> ...
> 2 x 9 = 18
> ```
>



[2] 입력 프롬프트

```python
>>> prompt = """
... 1. Add
... 2. Del
... 3. List
... 4. Quit
...
... Enter number: """

>>> number = 0
>>> while number != 4:        #number!=4에서 변수가 존재하지 않는다는 오류를 발생
>>>     print(prompt)
>>>     number = int(input())

Enter number:
1

1. Add
2. Del
3. List
4. Quit

ADD
```



[3] 커피 자판기

```python
# 자판기의 커피 수량
coffee = 5

# 커피가 남아있는 동안 작동!
while coffee > 0:

    # 실제로는 자판기를 통해서 넣은 금액.
    money = int(input("금액을 입력해주세요 : "))
    
    if money == 300:
        # 실제로 이 파트는 자판기에서 커피를 뽑는 명령으로 대체된다.
        print("Coffee")
        # 이제 커피를 하나씩 줄인다.
        coffee = coffee - 1 # coffee -= 1

    elif money < 300:
        # 실제로 이 파트는 돈을 반환한다.
        print("%d원을 돌려줍니다." % money)
        
     
    else: # or elif money > 300:
        print("Coffee")
        # 커피를 뽑아주고
        coffee = coffee - 1
        # 이제 커피를 하나씩 줄인다.
        print("%d원을 돌려줍니다." % (money - 300))
        # 거스름돈을 돌려준다.
        
    # 커피가 다 떨어진 경우 알려야한다.
    
print("커피가 모두 소진되었으니, 관리자에게 문의해주세요.")
```

```python
금액을 입력해주세요 : 300
Coffee
금액을 입력해주세요 : 200
200원을 돌려줍니다.
금액을 입력해주세요 : 1000
Coffee
700원을 돌려줍니다.
금액을 입력해주세요 : 500
Coffee
200원을 돌려줍니다.
금액을 입력해주세요 : 300
Coffee
금액을 입력해주세요 : 3000
Coffee
2700원을 돌려줍니다.
커피가 모두 소진되었으니, 관리자에게 문의해주세요.
```
