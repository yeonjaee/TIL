## sort

- 크게 [`sort_index` : 인덱스(행)를 기준으로] , [`sort_values` : 컬럼의 값을 기준으로] 정렬하는 방법이 있다.

  - `````
    df.sort_index(), sort_index(df)	  # 행들을 정렬
    df.sort_values(), sort_values(df) # 해당 컬럼의 값들을 정렬
    `````
    
  - ```python
    
    ```

- Series, DataFrame 호출 가능
- index, column 재배치
- 기본 정렬 방식은 `오름차순`

```
sort_index			(by=$,				# 정렬 기준이 되는 컬럼명. index는 X, values는 O
					axis=0,				# axis=0: 행 기준, axis=1: 열 기준
					ascending=True,		# True=오름차순(기본,생략가능), False=내림차순
					inplace=False,		# DataFrame 자체를 정렬해서 저장
					kind='quicksort',	# 정렬 알고리즘
					na_position='last'	# 결측값 위치,{'first','last'}
					)
```



```python
emp
'''
empno	ename	deptno	sal
0	1	smith	10		4000
1	2	allen	10		4500
2	3	ford	20		4300
3	4	grace	10		4200
4	5	scott	30		4100
5	6	king	20		4000
'''

emp.sort_index(axis=1) # 열 기준으로 정렬
'''
	deptno	empno	ename	sal
0	10		1		smith	4000
1	10		2		allen	4500
2	20		3		ford	4300
3	10		4		grace	4200
4	30		5		scott	4100
5	20		6		king	4000
'''


emp.sort_index(axis=0)   # 행 기준, 행 순서대로 정렬
'''
	empno	ename	deptno	sal
0	1		smith	10		4000
1	2		allen	10		4500
2	3		ford	20		4300
3	4		grace	10		4200
4	5		scott	30		4100
5	6		king	20		4000
'''

emp.sort_values(by='sal')  
emp.sort_values('sal')     # by 생략가능
'''
	empno	ename	deptno	sal
0	1		smith	10		4000
5	6		king	20		4000
4	5		scott	30		4100
3	4		grace	10		4200
2	3		ford	20		4300
1	2		allen	10		4500
'''

emp.sort_values(by =['deptno','sal'],ascending=[True,False])
# 복수 조건. deptno을 먼저 오름차순 정렬하고 같은 값이면 sal을 내림차순으로 정렬
```

