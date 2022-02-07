## replace

- DataFrame(Series 호출 가능) 에 저장된 값을 치환하기 위해서 사용한다.

  > ```python
  > df2 = DataFrame({'name':['A','B','C'],'age':['20','17','62'],'sex':['m','f','f']})
  > df2
  > '''
  > 	name age sex
  > 0	A	20	m
  > 1	B	17	f
  > 2	C	62	f
  > '''
  > 
  > df2.replace('m','f')
  > '''
  > name	age	sex
  > 0	A	20	f
  > 1	B	17	f
  > 2	C	62	f
  > '''
  > ```

- 숫자, NaN 치환 가능
  
  > ```python
  > df3 = DataFrame([['1,200',','],['1,400','1,500']])
  > df3
  > '''
  > 	0	1
  > 0	1,200	,
  > 1	1,400	1,500
  > '''
  > 
  > df3.replace(',','') # ','로 생긴 값을 삭제하는 의미
  > '''
  > 	0	1
  > 0	1,200	
  > 1	1,400	1,500
  > '''
  > ```
  
- 검색 문자열과 완벽히 일치하는 것만 치환한다

- 일치하는 모든 **문자열 일부**를 치환하고 싶은 경우엔 `regex=True`를 설정해 **정규 표현식**으로 설정해준다.

  > ```python
  > import pandas as pd
  > from pandas import DataFrame,Series
  > 
  > df = DataFrame(['abcd','abcde','aaaab'])
  > df
  > 
  > '''
  > 	0
  > 0	abcd
  > 1	abcde
  > 2	aaaab
  > '''
  > 
  > df.replace('ab','C')
  > 
  > '''
  > 	0
  > 0	abcd
  > 1	abcde
  > 2	aaaab
  > '''
  > ```
  >
  > 'ab'를 'C'로 치환하고 싶은데 되지 않는다. **정규 표현식을 사용하면 치환된다.**
  >
  > ```python
  > df = DataFrame(['abcd','abcde','aaaab'])
  > df
  > 
  > df.replace('ab','C',regex=True)
  > '''
  > 	0
  > 0	Ccd
  > 1	Ccde
  > 2	aaaC
  > '''
  > ```



### str.replace()

- Series 객체만 호출 가능

  > ```python
  > ['abcd','abcde','aaaab'].str.replace('a','A')
  > AttributeError: 'list' object has no attribute 'str'
  > # 리스트는 호출 불가
  > 
  > DataFrame(['abcd','abcde','aaaab']).str.replace('a','A')
  > AttributeError: 'DataFrame' object has no attribute 'str'
  > # 데이터 프레임도 호출 불가
  > ```

- **즉, DataFrame 내의 하나의 특정 컬럼은 하나의 Series 이므로**, 이 컬럼 안의 일부 문자열을 치환하고 싶은 경우에는 정규 표현식을 사용하지 않아도, `str.replace`를 사용하여 일치하는 값만 치환할 수 있다.

- ```python
  df2
  '''
  name	age	sex
  0	A	20	male
  1	B	20	female
  2	C	62	female
  '''
  
  df2['sex'].str.replace('fe','')
  '''
  0    male
  1    male
  2    male
  Name: sex, dtype: object
  '''
  ```
