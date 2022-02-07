## iloc, loc



#### **[1] iloc** 

: positional indexing

: `숫자로 행/열의 위치를 나타내서 인덱싱 하는 방법 `

```python
1) 행이나 열을 하나만 선택한다.

# Index:
data.iloc[0]	# data의 1번째 행
data.iloc[-1]	# data의 마지막 행

# Columns:
data.iloc[:,0]	# data의 1번째 열
data.iloc[:,-1]	# data의 마지막 열


2) 여러 행이나 열을 선택한다.

# Index:
data.iloc[0:3]		# data의 첫 3개 행, 모든 열
data.iloc[:,0:1]	# data의 모든 행, 첫 2개 열
data.iloc[0:3,2:4]	# data의 첫 3개행과 2번째~3번째 열 
data.iloc[[1,3,5],[2,4,6]]	# data의 2,4,6번째 행과 3,5,7번째 열
```





#### **[2] loc**

 : label indexing

: `라벨이나 조건표현으로 인덱싱 하는 방법`

```python
# 1번은 Series로 반환하고, 2번은 DataFrame으로 반환한다.

1) data.loc['Hey']				# Hey 행만 선택
2) data.loc[['Hey','Mama']]	# Hey와 Mama 행 둘다 선택


1) data.loc[['Ive','eleven'],['singer','song name','prize']] # 라벨로 행/열을 선택
2) data.loc[['Ive','eleven'],['singer':'prize']]			 # 범위 인덱싱 가능
```