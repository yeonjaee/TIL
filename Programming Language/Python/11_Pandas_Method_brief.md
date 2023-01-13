참고: [13 Most Important Pandas Functions for Data Science](https://www.analyticsvidhya.com/blog/2021/05/pandas-functions-13-most-important/)



`read_csv()` : csv 파일 읽기

```python
data = pd.read_csv('$')
```



`head(n)` : head(n) is used to return **the first n rows** of a dataset (0 ~ n-1 번째 행까지)

*tail() is similar to head(), and returns **the bottom n rows** of a dataset*

```python
data.head(6)
data.tail()
```



`describe()` : It summarizes central tendency and dispersion of the dataset.

컬럼별 주요 통계량을 요약

`data.info()`는 컬럼명과 컬럼별 결측치, 컬럼별 데이터타입을 확인.

```python
data.describe()
data.info()
```



`memory_usage()` :  returns a Pandas Series having the memory usage of each column (in bytes). By specifying the deep attribute as True, we can get to know the actual space being taken by each column. More details on memory_usage() can be found.

about: https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.memory_usage.html

```python
data.memory_usage(deep=True)
```



`astype()` : cast a Python object to a particular data type.  It can be a very helpful function in case your data is not stored in the correct format (data type).

```python
data['Gender'] = data.Gender.astype('category')
```



`loc[:]` : access a group of rows and columns in a dataset, a slice of the dataset, as per our requirement

#### 주의할 점

loc로 설정하는 범위는 포괄적이다. 즉, loc[0:4] 는 0~4, 둘 다 포함하는 범위를 의미한다.

about : https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.loc.html

```python
data.loc[0:4, ['Name', 'Age', 'State']]
```



` to_datetime()` : converts a Python object to datetime format

```python
pd.to_datetime(s1)

'''
0   2022-01-01
1   2022-01-02
2   2022-01-03
dtype: datetime64[ns]
'''

d1 = datetime.now()
d1
datetime.strftime(d1, '%a') # 요일 리턴 (축약형) 'Wed'
datetime.strftime(d1, '%A') # 요일 리턴 (완전체) 'Wednesday'
datetime.strftime(d1, '%m-%d,%Y') #'12-29,2021'

datetime.strftime(d1, '%Y') # 연도 리턴 (완전체) '2021'
datetime.strftime(d1, '%y') # 연도 리턴 (완전체) '21'
```

[따로정리](https://github.com/SeoulStrech/TIL/blob/master/Python/%ED%8C%8C%EC%9D%B4%EC%8D%AC%20%EB%AC%B8%EB%B2%95/17_Pandas%20Method_datetime.md)



`value_counts()` : returns a Pandas Series containing the counts of unique values. it helps us in identifying the number of occurrences of each unique value in a Series

```python
data['State'].value_counts()
'''
Haryana           3
Delhi             2
West Bengal       1
Tamil Nadu        1
Bihar             1
Madhya Pradesh    1
Name: State, dtype: int64
'''
```
value_counts() can also be used to plot bar graphs of categorical and ordinal data.

`data['State'].value_counts(normalize=True).plot(kind='bar', title='State')`



`drop_duplicates()` : returns a Pandas DataFrame with duplicate rows removed.

```python
data.drop_duplicates(inplace=True)
```
inplace=True makes sure the changes are applied to the original dataset.



`groupby()` : group a Pandas DataFrame by 1 or more columns, and perform some mathematical operation on it.

```python
data.groupby(by='State').Salary.mean()
```



`merge()` : merge 2 Pandas DataFrame objects or a DataFrame and a Series object on a common column (field).

```python
data.merge(data_2, on='Name', how='left')
```



`sort_values()` :  sort column in a Pandas DataFrame (or a Pandas Series) by values in ascending or descending order. By specifying the inplace attribute as True, you can make a change directly in the original DataFrame.

```python
data.sort_values(by='Name', inplace=True)
```
