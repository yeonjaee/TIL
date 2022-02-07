## DataFrame

DataFrame 객체를 생성하는 가장 쉬운 방법은 딕셔너리를 사용하는 것이다.

`d1 = {'name': ['smith','will'],'salary':[900,1800]}`

딕셔너리 `d1`을 통해 key, value 값을 저장한 후, 이를 DataFrame 생성자로 넘겨주면 Dataframe 객체가 생성된다.

```python
d2 = DataFrame(d1)
print(d2)
#     name   sal
# 0  smith   900
# 1   will  1800
```

---

`dtypes` 으로 각 컬럼 별 데이터 타입을 확인해보면 각 컬럼은 Series 객체임을 알 수 있다.

**즉,  DataFrame은 인덱스가 같은 여러개의 Series 객체로 구성된 자료구조라고 생각하면 된다.**





#### 기본 메서드

- **`df.dtypes`** # 각 컬럼 별 데이터 타입 확인 
- **`df.index`**
- **`df.columns`**
  - `df.col1` # 컬럼 선택
  - `df.columns=['A','B','C']` # 컬럼 이름 변경

- **`df.values`**



#### 그 외의 기능

```python
# np.arange() 넘파이 배열을 생성
# reshape(,) 배열 설정 후 배치
# index = [] 인덱스 값 설정
# columns = [] 컬럼 값 설정

d3 = DataFrame(np.arange(1,7).reshape(2,3), index =['a','b'], columns=['col1','col2','col3'])
d3

#    col1  col2  col3
# a     1     2     3
# b     4     5     6 
```