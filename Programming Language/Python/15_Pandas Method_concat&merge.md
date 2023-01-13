## concat

특정 축을 따라 pandas 객체를 연결한다. 기본적으로 세로방향으로 합쳐진다.

`pandas.concat(objs, axis=0, join='outer', ignore_index=False, keys=None, levels=None, names=None, verify_integrity=False, sort=False, copy=True)`



*주요 옵션만 정리*

`df1 = DataFrame(np.arange(1,7).reshape(2,3),columns=['A','B','C'])`

`df2 = DataFrame(np.arange(10,61,10).reshape(2,3), columns = ['A','B','C'])`



- **no option**

  > ```python
  > pd.concat([df1,df2])
  > '''
  > 	A	B	C
  > 0	1	2	3
  > 1	4	5	6
  > 0	10	20	30
  > 1	40	50	60
  > '''
  > ```

  

- **axis** : {0/’index’, 1/’columns’}, default 0

  > ```python
  > pd.concat([df1,df2],axis=0)
  > '''
  > 	A	B	C
  > 0	1	2	3
  > 1	4	5	6
  > 0	10	20	30
  > 1	40	50	60
  > '''
  > 
  > pd.concat([df1,df2],axis=1)
  > '''
  > 	A	B	C	A	B	C
  > 0	1	2	3	10	20	30
  > 1	4	5	6	40	50	60
  > '''
  > ```



- **join** : {‘inner’, ‘outer’}, default ‘outer’.

  다른 축(또는 축)의 인덱스를 처리하는 방법.



- **ignore_index** :bool, default False 

  기존 인덱스 대신에 새로운 순차적인 인덱스 번호를 부여함.

  > ```python
  > pd.concat([df1,df2],ignore_index=True)
  > '''	A	B	C
  > 0	1	2	3
  > 1	4	5	6
  > 2	10	20	30
  > 3	40	50	60
  > '''
  > # 0~n 인덱스 번호가 부여된걸 볼 수 있다.
  > ```



- **keys** : sequence, default None

  다중 레벨이 전달되는 경우, 계층적 인덱스를 구성함에 있어서 각 계층에 `key`값을 정의해준다.

  > ```python
  > pd.concat([df1,df2],keys=['first','second'])
  > '''
  > 			A	B	C
  > first	0	1	2	3
  > 		1	4	5	6
  > second	0	10	20	30
  > 		1	40	50	60
  > '''
  > ```





## merge

- Index/columns 을 서로 분리되어 있는 하나의 데이터프레임으로 합친다.
- 참조 조건 사용, 연관된 두 데이터를 병합(join)

```python
pd.merge(left,             # 첫번째 데이터프레임
         right,            # 두번째 데이터프레임
         how='inner',      # 조인 방법(default = 'inner' )
         on=,              # 조인하는 컬럼(컬럼명이 서로 같을 때) 
         left_on=,         # 첫번째 데이터프레임 조인(컬럼명이 서로 다를 때)
         right_on=)        # 두번째 데이터프레임 조인(컬럼명이 서로 다를 때)
```



*주요 옵션만 정리*
`df1 = pd.DataFrame({'lkey': ['foo', 'bar', 'baz', 'foo'],'value': [1, 2, 3, 5]})`

`df2 = pd.DataFrame({'rkey': ['foo', 'bar', 'baz', 'foo'], 'value': [5, 6, 7, 8]})`

- **on/left_on/right_on** : label or list, or array-like

  왼쪽/오른쪽 데이터 프레임에서 조인할 열 또는 인덱스 레벨 이름이다.

  > ```python
  > pd.merge(df1, df2, left_on='lkey', right_on='rkey')
  > 
  >   lkey  value_x rkey  value_y
  > 0  foo        1  foo        5
  > 1  foo        1  foo        8
  > 2  foo        5  foo        5
  > 3  foo        5  foo        8
  > 4  bar        2  bar        6
  > 5  baz        3  baz        7
  > ```



- **suffixes** : list-like, default is (“_x”, “_y”)

  열 이름에 추가할 접미사

  > ```python
  > pd.merge(df1,df2, left_on='lkey', right_on='rkey',suffixes=('_left', '_right'))
  > 
  >    lkey  value_left rkey  value_right
  > 0  foo           1  foo            5
  > 1  foo           1  foo            8
  > 2  foo           5  foo            5
  > 3  foo           5  foo            8
  > 4  bar           2  bar            6
  > 5  baz           3  baz            7
  > ```



- **how** : {‘left’, ‘right’, ‘outer’, ‘inner’, ‘cross’}, default ‘inner’

```python
>>> df1 = pd.DataFrame({'a': ['foo', 'bar'], 'b': [1, 2]})
>>> df2 = pd.DataFrame({'a': ['foo', 'baz'], 'c': [3, 4]})

>>> df1
      a  b
0   foo  1
1   bar  2

>>> df2
      a  c
0   foo  3
1   baz  4


>>> df1.merge(df2, how='inner', on='a')
      a  b  c
0   foo  1  3


>>> df1.merge(df2, how='left', on='a')
      a  b  c
0   foo  1  3.0
1   bar  2  NaN


>>> df1 = pd.DataFrame({'left': ['foo', 'bar']})
>>> df2 = pd.DataFrame({'right': [7, 8]})

>>> df1
    left
0   foo
1   bar

>>> df2
    right
0   7
1   8

>>> df1.merge(df2, how='cross')
   left  right
0   foo      7
1   foo      8
2   bar      7
3   bar      8
```
