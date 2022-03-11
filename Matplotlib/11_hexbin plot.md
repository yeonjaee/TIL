- 데이터가 클 때 각각의 점을 산점도로 표현할 때의 단점을 보완할 수 있는 그래프.

- 육각형 모양의 Bin을 생성하여 그래프로 표현
  - 데이터의 크기 비교 가능
- histogram과 scatter plot를 혼합한 형태



```python
df = pd.DataFrame(np.random.rand(1000,2),columns=['a','b'])
df.head()
```

![image-20220311093538274](assets/11_hexbin%20plot/image-20220311093538274.png)

---



```python
df['c'] = np.random.uniform(0,3,1000)
df['c']
```

![image-20220311093745492](assets/11_hexbin%20plot/image-20220311093745492.png)

- 기본적으로 각(x,y) 점 주변의 개수에 대한 히스토그램이 계산
- C 및 reduce_C_function 인수에 값을 전달하여 대체 집계를 지정할 수 있음
- C는 각 (x,y) 점에서 값을 지정하고 reduce_C_function은 빈의 모든 값을 단일 숫자(예: 평균,최대,합계,표준)로 줄이는 하나의 인수의 함수
- 이 예에서 위치는 열 a, b에 의해 주어지며, 값은 열 c에 의해 주어짐
- bin은 numpy의 max 함수로 집계됨



![image-20220311094016187](assets/11_hexbin%20plot/image-20220311094016187.png)