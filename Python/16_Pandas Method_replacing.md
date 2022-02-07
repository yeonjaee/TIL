### [1] stack, unstack

---

`stack`은 wide를  long으로, 즉 아래로 길게 쌓는 형태이며.

`unstack`은 long을 wide로, 즉 옆으로 길게 늘린다는 형태이다.

`Dataframe.stack(level=0~, dropna=bool, fill_value = $)` 



```
# 인덱스나 컬럼이 여러 레벨로 표현되고, 상위레벨은 0이며 하위 레벨로 갈 수록 숫자가 증가한다
# dropna=True 로 옵션시에 결측값을 제거한다.
# 결측값을 fill_value로 대체 가능하다.
```



### [2] pivot_table

---

index, column에 배치할 컬럼명과 행과 열이 교차하는 값을 갖는 컬럼명을 정의하여 피봇 테이블을 작성한다.

```python
kimchi.pivot_table(index = '판매월',      # index 방향에 배치할 컬럼명
                   columns ='판매처',     # column 방향에 배치할 컬럼명
                   values ='수량',        # 교차표에 작성할 값을 갖는 컬럼명
                   aggfunc ='sum'         # 그룹 함수
                   )
```





### [3] drop

---

특정 행, 컬럼 제거. `df.drop()`

```python
df.drop(4,axis=0) #4번째 인덱스 제거
# axis = 0 은 열을 나타내는데, 4번째 인덱스의 열 하나하나를 삭제한다는 의미로 접근해야 한다.

df.drop('sal',axis=1)  # sal 컬럼 제외
# 마찬가지로 sal 컬럼의 값들을 행 하나하나 삭제한다는 의미
```





### [4] rename

---

행, 컬럼명 변경.

 `df.rename(columns = {'old_nm' : 'new_nm'}, axis=0/1 inplace = True)`

```python
df.columns = ['emptno','ename','deptno','salary']

>>>
df.rename({'salary':'sal','deptno':'dept_no'},axis=1)

예제] emp 데이터에서 ename 을 index 로 설정 후 scott 을 SCOTT으로 변경

emp=emp.set_index('ename')
emp.rename({"scott":"SCOTT"},axis=0)
emp

```