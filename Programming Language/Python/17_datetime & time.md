## datetime

날짜, 시간과 관련된 모듈.

날짜 형식을 만들 때 주로 사용된다.

`import datetime`으로 불러온다.



### 1. 현재 날짜

```python
datetime.datetime.now()
now = datetime.datetime.now()
#datetime.datetime(2021, 12, 29, 11, 25, 4, 803429)

print(now.year,'년')
print(now.month,'월')
print(now.day,'일')
print(now.hour,'시')
print(now.minute,'분')
print(now.second,'초')
```



### 2. 날짜 파싱(포맷에 맞게 출력하기)

2-1.

```python
d2='2022/01/05'

datetime.strptime(d2, '%Y/%m/%d')
# datetime.datetime(2022, 1, 5, 0, 0)

datetime.strptime('09/12/25', '%m/%d/%y') # 2025년 09월 12일 해석
# datetime.datetime(2025, 9, 12, 0, 0)
```

**년도를 맨 앞에 쓸때는 대문자 Y로 써야한다. 아니면 오류가 난다.**



2-2.

```python
Series 벡터 연산 불가 
해결방안 : map()
    
s1 = Series(['2022/01/01','2022/01/02','2022/01/03'])
datetime.strptime(s1,'%Y/%m/%d')
# TypeError: strptime() argument 1 must be str, not Series

s1.map(lambda x: datetime.strptime(x, '%Y/%m/%d'))
'''
0   2022-01-01
1   2022-01-02
2   2022-01-03
dtype: datetime64[ns]
'''
```



2-3.

```python
pd.to_datetime
# 벡터 연산가능

pd.to_datetime(s1)
'''
0   2022-01-01
1   2022-01-02
2   2022-01-03
dtype: datetime64[ns]
'''

pd.to_datetime(s1, infer_datetime_format=True)
```

infer_datetime_format = True로 설정해주면 알아서 날짜/시간 파싱을 해준다.





3. 날짜 포맷 변경 datetime.strftime(string format time)

   - 요일 추출(날짜에서 요일을 return 하도록 날짜 출력 형식 변경)

   - (연/월/일) --> (월/일/연) 순서로 변경

   - (주의) 날짜 포맷 변경 한 후 return 데이터 타입은 무조건 문자

```python
d1 = datetime.now()
d1
datetime.strftime(d1, '%a') # 요일 리턴 (축약형) 'Wed'
datetime.strftime(d1, '%A') # 요일 리턴 (완전체) 'Wednesday'
datetime.strftime(d1, '%m-%d,%Y') #'01-05,2022'

datetime.strftime(d1, '%Y') # 연도 리턴 (완전체) '2022'
datetime.strftime(d1, '%y') # 연도 리턴 (완전체) '22'

s2
datetime.strftime(s2, '%Y') # 벡터연산 불가 
#TypeError: descriptor 'strftime' for 'datetime.date' objects doesn't apply to a 'Series' object

map 함수 이용
s2.map(lambda x: datetime.strftime(x, '%Y'))
'''
0    2022
1    2022
2    2022
dtype: object
```



4. 날짜 연산

```python
1) offset 

from pandas.tseries.offsets import Day, Hour, Second
d1 + Day(100)
# Timestamp('2022-04-13 12:57:51.598643')

-------------------------------------------------------
2) timedelta (날짜와의 차이)

from datetime import timedelta

# datetime.datetime.now()+datetime.timedelta(더할시간) : 특정 일, 시간, 분, 초 이후의 날짜와 시간 구하기
d1 + datetime.timedelta(weeks=1, days=1, hours=1, minutes=1, seconds=1)

d1 + timedelta(100) 
# datetime.datetime(2022, 4, 13, 12, 57, 51, 598643)
# 오늘 일자부터 100일 뒤를 리턴해줌

d1 + timedelta(-100)
# 오늘 일자부터 100일 전을 리턴해줌

-------------------------------------------------------
3) DateOffset
d1 + pd.DateOffset(months = 4)

d1 - datetime.strptime(d2, '%Y/%m/%d')
# datetime.timedelta(days=-3, seconds=46671, microseconds=598643)
d3 = d1 - datetime.strptime(d2, '%Y/%m/%d')
```



## time

시간 데이터를 다루기 위한 모듈. `import time`으로 불러오면 된다.



### 현재 날짜와 시간 가져오기

- `time.localtime()`

```python
print(time.localtime().tm_year)
print(time.localtime().tm_mon)
print(time.localtime().tm_mday)
print(time.localtime().tm_hour)
print(time.localtime().tm_min)
'''
2022
1
10
16
56
'''
```

- `time.ctime()`

```python
time.ctime()   #ctime : current time
```



### 일시정지

- time.sleep(초)

```python
# 카운트다운
print(3)
time.sleep(1)
print(2)
time.sleep(1)
print(1)
time.sleep(1)
print('srart')
```

