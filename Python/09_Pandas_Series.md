## Pandas?

**pandas**는 데이터 조작 및 분석을 위한 Python 프로그래밍 언어 용으로 작성된 소프트웨어 라이브러리로,

특히 pandas의 자료구조 중 Series는 1차원 데이터를 다루는 데 효과적이며, DataFrame은 행과 열로 구성된 2차원 데이터를 다루는 데 효과적이다.

`from pandas import Series, DataFrame` 

---



### [1] Series

- 1차원 자료 구조
- 하나의 데이터 타입 허용
- Value 값과 동시에 Index 값도 자동 저장

```python
Series([1,2,3,4])
s1 = Series([1,2,3,4])
s1
>>>
index value
0	1
1	2
2	3
3	4
dtype: int64
```

 | index | value |
  | :---: | :---: |
  |   0   |   1   |
  |   1   |   2   |
  |   2   |   3   |
  |   3   |   4   |

  

#### 기본 메소드

- **`s1.dtype`**  # dtype('int64') 데이터 타입 출력 

- **`s1.index`**  # RangeIndex(start=0, stop=4, step=1) 인덱스 출력

  - ```python
    #1.Series 생성 시 index 설정
    s1 = Series([1,2], index=['a','b'])
    
    #2.index 수정
    s1.index = ['c','d']
    
    #3. index 재배열
    s1.reindex['e','f']
    ```

- **`s1.values`** # array([1, 2, 3, 4], dtype=int64)  값(value) 출력 



- 인덱싱의 위치가 서로 다른 경우에도 인덱싱 값이 같다면 알아서 연산해준다.

> ```python
> # key 가 같은 값끼리 연산 가능
> # key 가 다른 경우 모두 NaN 반환 
> 
> s1 = Series([10,20,30,40], index=['e','c','f','d'])
> s2 = Series([10,20,30,40], index=['c','d','e','f'])
> ```
>
> ```python
> # 양쪽 모두 존재하지 않는 key 일 경우 
> # NA 반환되는 거 방지하기 위해 fill_value 옵션 사용
> 
> s1.add(s2, fill_value=0)
> s1.sub(s2, fill_value=0)  # - 연산 
> s1.mul(s2, fill_value=1)  # * 연산 
> s1.div(s2, fill_value=1)  # / 연산 
> ```