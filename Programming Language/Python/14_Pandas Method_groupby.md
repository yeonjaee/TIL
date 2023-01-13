## groupby

`그룹연산`

```python
kimchi.groupby(by=None,  # 그룹핑 할 컬럼(기준)
               axis= 0,  # 그룹핑 연산 방향
               level = None) # 멀티 인덱스일 경우, 특정 레벨의 값을 그룹핑 컬럼으로 사용
```

- 성별 성적 평균, 학년별 성적 최고점수, 부서별 평균 연봉 등등을 구하는데 사용할 수 있음.

- groupby 메서드 처리 가능.



```python
kimchi

     판매년도  판매월    제품   판매처     수량       판매금액
0    2013    1  총각김치  대형마트  27916  233968900
1    2013    1  총각김치   백화점  11971   99796735
2    2013    1  총각김치   편의점   1603    2264200
3    2013    2  총각김치  대형마트  23057  194593960
4    2013    2  총각김치   백화점  11678  103106940
..    ...  ...   ...   ...    ...        ...
427  2016   11   무김치   백화점  16818  213580462
428  2016   11   무김치   편의점   1849    2718207
429  2016   12   무김치  대형마트  40806  351917006
430  2016   12   무김치   백화점  11877  139476205
431  2016   12   무김치   편의점   1890    2767080

[432 rows x 6 columns]
```



`kimchi.groupby(by=['제품']).sum()`

제품별 기준, 컬럼의 모든 합

```
	판매년도	판매월	수량	판매금액
제품				
무김치		290088	936	2142764	20036782345
열무김치	290088	936	2147999	20295676819
총각김치	290088	936	2411653	23300688286
```



`kimchi.groupby(*by*=['제품', '판매처']).sum()`

```
					판매년도	판매월	수량	판매금액
제품		판매처				
무김치		대형마트	96696	312	1550027	14243851204
			백화점		96696	312	510114	5675796839
			편의점		96696	312	82623	117134302
열무김치	대형마트	96696	312	1491864	14272706507
			백화점		96696	312	567129	5897836502
			편의점		96696	312	89006	125133810
총각김치	대형마트	96696	312	1649486	16512153282
			백화점		96696	312	658442	6639524485
			편의점		96696	312	103725	149010519
```



`kimchi.groupby(*by*=['제품', '판매처'])['수량'].sum()`

`kimchi.groupby(*by*=['제품', '판매처']).sum()['수량']`

```
## [제품, 판매처 기준][수량의 총 합]

제품    판매처 
무김치   대형마트    1550027
      백화점      510114
      편의점       82623
열무김치  대형마트    1491864
      백화점      567129
      편의점       89006
총각김치  대형마트    1649486
      백화점      658442
      편의점      103725
Name: 수량, dtype: int64
```



`kimchi.groupby(by='제품').sum()[['수량','판매금액']]`

```
# [제품 기준],[수량과 판매금액 총 합]

		수량		판매금액
제품		
무김치		2142764	20036782345
열무김치	2147999	20295676819
총각김치	2411653	23300688286
```





#### 멀티 인덱스

`kimchi.groupby(*by*=['제품','판매처'])['수량'].agg(['sum','mean'])`



##### **다수의 함수 사용을 위한 agg() 사용**



```
# 제품별, 판매처별 수량 총 합, 평균

sum				mean
제품	판매처		
무김치	대형마트	1550027			32292.229167
		백화점		510114			10627.375000
		편의점		82623			1721.312500
열무김치	대형마트	1491864			31080.500000
			백화점		567129			11815.187500
			편의점		89006			1854.291667
총각김치	대형마트	1649486			34364.291667
			백화점		658442			13717.541667
			편의점		103725			2160.937500
```



`kimchi.groupby(['제품','판매처'])[['수량','판매금액']].agg(['sum','mean'])`

:  # 제품별, 판매처별 수량,판매금액의 총 합, 평균



#### 멀티 인덱스 응용

제품별,판매처별 <u>수량은 총합</u>, <u>판매금액은 평균</u>만 >> **dict() 사용**

`kimchi.groupby(*by*=['제품','판매처'])[['수량','판매금액']].agg({'수량':'sum', '판매금액':'mean'})`

```
						수량	판매금액
제품		판매처		
무김치		대형마트	1550027	2.967469e+08
			백화점		510114	1.182458e+08
			편의점		82623	2.440298e+06
열무김치	대형마트	1491864	2.973481e+08
			백화점		567129	1.228716e+08
			편의점		89006	2.606954e+06
총각김치	대형마트	1649486	3.440032e+08
			백화점		658442	1.383234e+08
			편의점		103725	3.104386e+06
```





#### 멀티 레벨을 갖는 경우의 groupby 연산
`kimchi_2 = kimchi.groupby(by=['제품', '판매처'])['수량'].sum()`
```
제품    판매처 
무김치   대형마트    1550027
      	백화점      510114
      	편의점       82623
열무김치  대형마트    1491864
     	 백화점      567129
      	편의점       89006
총각김치  대형마트    1649486
      	백화점      658442
      	편의점      103725
Name: 수량, dtype: int64
```


`kimchi_2.groupby(level=0).sum()  # 제품별 총합`
`= kimchi_2.groupby(level='제품').sum()`

```
제품
무김치     2142764
열무김치    2147999
총각김치    2411653
Name: 수량, dtype: int64
```



`kimchi_2.groupby(*level*=1).sum()  # 판매처별 총합`

```
판매처
대형마트    4691377
백화점     1735685
편의점      275354
Name: 수량, dtype: int64
```
