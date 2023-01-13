결측치를 다루는 2가지의 주요 방식은 1) **제거하기**, 2) **채우기** 라 할 수 있다.



## [1] 제거하기(Delete)



### 1. NA를 갖는 행,열제거(목록 삭제/Listwise)



#### 1.1 dropna

**결측치(NA)**를 하나라도 포함하는 행이나 열을 삭제한다.

```python
    A    B    C     D
0 1.0  2.0  3.0   4.0
1 NaN  NaN  7.0   8.0
2 NaN  NaN  NaN  12.0
3 NaN  NaN  NaN   NaN
```

위와 같은 **DataFrame** `df1`이 있다고 할 때 `dropna()` 함수를 사용하여 NA를 하나라도 포함된 행을 제거 한다.

```python
df1.dropna() #NA 를 하나라도 포함된 행 제거

     A    B    C    D
0  1.0  2.0  3.0  4.0
```

`dropna()`함수에도 옵션을 넣을 수 있는데, **`how = any/all`**: `any`로 설정하면 NA를 하나라도 포함한 행을 삭제한다는 것이고, `all`로 설정하면 모든 값이 NA인 행을 제거한다는 의미다. **`axis`** 인자로 축을 설정하여 컬럼으로 기준을 바꿀 수 있다.

**`thresh=$`**($는 숫자.0 이상의 정수) 는 임계값을 설정하는 것으로 NA 아닌 값이 최소 $개 이상이면 제거하지 않는다는 의미다.

**`subset = [column]`** 는 해당 컬럼에서 NA 값을 갖는 행이 있다면 그 행을 삭제한다.

> ```python
> df1.dropna(how='any') # NA 를 하나하도 포함한 행 제거
> 
> df1.dropna(how='all') # 모든 값이 NA인 행 제거(결측치 처리시 반드시 사용할 것)
> 
> df1.dropna(thresh=2) # NA 아닌 값이 최소 2개 이상이면 제거하지 않음 (실무에서 매우 유용)
> 
> df1.dropna(axis=1,how='any') # 특정 컬럼이 모두 NA로만 구성되어 있으면 해당 컬럼 제거
> 
> df1.dropna(subset=['C']) # C 컬럼에서 NA 값을 가지면 그 행 제거
> ```
>



###### 유일값과 중복값을 확인하여 중복값을 제거할 수도 있다.

**`unique()`** 를 이용하면 Series가 가지고 있는 유일값을 확인할 수 있다. 중복된 값이 있다면 주소가 맨 앞인 값이 유일값으로 확인된다.

반대로 **`duplicated()`**를 사용하면 중복된 값을 **boolean**값으로 확인할 수 있다. 중복값은 **True**로 출력된다.

**`drop_duplicated(subset=['columns'])`**를 사용하면 중복된 값이 포함된 열을 삭제한다.

>```python
>df3= DataFrame({'A':[1,1,3,4],'B':[10,10,30,40],'C':[100,200,300,400]})
>
>   A   B    C
>0  1  10  100
>1  1  10  200
>2  3  30  300
>3  4  40  400
>
>df3['A'].unique()	# A컬럼의 유일값 찾기
>Out[86]: array([1, 3, 4], dtype=int64)
>
>df3['A'].duplicated()
>Out[91]: 
>0    False
>1     True
>2    False
>3    False
>Name: A, dtype: bool
>
>df3.drop_duplicates(subset=['A','B'])	# A,B 컬럼의 중복된 값이 포함된 행을 >제거 
>```



### 2. 행,열제거

#### 2.1 drop

```python
# 열 제거
df.drop(columns = ['$'])

# 행 제거
df.drop(index = 번호)

```





---





## [2] 채우기

결측치를 **빈 칸** 혹은 **대체치**로 채운다.

```python
    A    B    C     D
0 1.0  2.0  3.0   4.0
1 NaN  NaN  7.0   8.0
2 NaN  NaN  NaN  12.0
3 NaN  NaN  NaN   NaN
```

위와 같은 **DataFrame** `df2`이 있다고 할 때 `fillna()` 함수를 사용하여 NA를 특정 값으로 채운다.

```python
df2.fillna('')	# NA를 빈칸으로 채움
     A    B    C     D
0  1.0  2.0  3.0   4.0
1            7.0   8.0
2                 12.0
3                     
```

마찬가지로 `fillna()`에도 옵션을 넣을 수 있는데,
**`method='ffill/pad'`** 를 사용하여 **NA를 NA 앞의 값으로** 대체해서 채우는 경우,
**`method='bfill/backfill'`** 을 사용하여 **NA를 NA 뒤의 값**으로 대체해서 채우는 방법이 있다.
NA를 각 열의 평균 등의 값으로 채우는 것도 가능하며 이는 `df1.fillna(df1.mean())`와 같은 방식으로 작성하면 된다.

```python
df1.fillna(method='ffill') or df1.fillna(method='pad') # 결측값을 결측값 앞의 값으로 대체하여 채움

df1.fillna(method='bfill') or df1.fillna(method='backfill') # 결측값을 결측값 뒤의 값으로 대체하여 채움

df1.fillna(df.mean()) # 결측값을 각 열의 평균 값으로 채움
```