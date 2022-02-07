## 자연어 처리를 위한 nltk 

nltk는 자연어 처리를 위한 파이썬 패키지다. `pip install nltk` 로 설치 가능하다. nltk의 기능을 제대로 사용하려면 nltk data라는 추가 데이터를 설치해야 한다.

```python
import nltk
nltk.download()
```

위와 같이 코드 내에서 작성 후 실행하면 각종 패키지와 데이터가 다운로드된다.



### 베이지안 확률 정의

---

```python
import numpy as np
import pandas as pd
from nltk.corpus import stopwords	# 불용어 제거
import string
#----------------------------------------------------#사전작업

def process_text(text):
    # 구두점 제거
    # list comprehension
    nopunc = [char for char in text if char not in string.punctuation] 
    
    nopunc = ''.join(nopunc)
    
    # text 에서 무의미한 단어(접미사, 조사 등) 삭제 --> stopwords (불용어) 제거
    # 소문자로 전부 변환(대/소문자 구분)
    cleaned_words = [word for word in nopunc.split() if word.lower() not in stopwords.words('english')]
    return cleaned_words
```

베이지안 확률을 코드로 작성하기 위한 사전 작업과 함수를 생성했다. 다음은 데이터 셋의 텍스트 데이터를 **토큰화(분절)**하는 단계이다.

```python
df =pd.read_csv("./Desktop/spam.csv")
df['text'].head()
'''
Out[65]: 
0         your free lottery
1    free lottery free you 
2          your free apple 
3       free to contact me 
4               I won award
Name: text, dtype: object
'''
```

`process_text`함수를 사용하여 토큰화한다.

```python
df['text'].head().apply(process_text)

'''
Out[64]: 
0          [free, lottery]
1    [free, lottery, free]
2            [free, apple]
3          [free, contact]
4                  [award]
Name: text, dtype: object
'''
```

---

text를 token 수만큼의 행렬 변환

```python
from sklearn.feature_extraction.text import CountVectorizer
messages_bow = CountVectorizer(analyzer=process_text).fit_transform(df['text'])
# CountVectorizer 모듈에서 process_text를 분석, 'text' 데이터를 fit_transform 해준다.
>>>
<6x6 sparse matrix of type '<class 'numpy.int64'>'
	with 11 stored elements in Compressed Sparse Row format>
```

data를 train, test로 분류

```python
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(messages_bow, df['label_num'], test_size=0.2, random_state=0)

```

---

**나이브베이즈(naive_bayes 다항식) 모델 사용**

```python
from sklearn.naive_bayes import MultinomialNB
classifier=MultinomialNB()
classifier.fit(X_train,y_train)	# train 데이터로 fit 해야 함

# 예측 값, 실제 값 출력

print(classifier.predict(X_train)) # 예측 값
print(y_train.values) # 실제 값

>>>
[1 0 1 0]
[1 0 1 0]
```

**학습 데이터셋의 모델 정확도**

```python
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix, accuracy_score

pred = classifier.predict(X_train) # 예측값 출력

# metrics pkg 에 있는 정밀도(precision), 재현율(sensitivity) f-1 score 구하기

print(classification_report(y_train,pred)) # 실제값, 예측값
>>>
'''
              precision    recall  f1-score   support

           0       1.00      1.00      1.00         2
           1       1.00      1.00      1.00         2

    accuracy                           1.00         4
   macro avg       1.00      1.00      1.00         4
weighted avg       1.00      1.00      1.00         4
'''
```

```txt
1. precision(정밀도) : 정확한 예측, 예측(prediction) 기준, TP 진짜 양성인 것을 맞추는 것
2. recall(재현율, 민감도) : 재현 실제(실화), 실제(acutall) 기준
3. f1-score: 정밀도와 재현율의 조화 평균( 둘다 중요한 지표니깐 둘다 고려함)
4. 정밀도와 재현율은 상충관계(trade-off)
5. 산업군 마다 중요도가 틀림
   - 의료: 재현율 (암환자_True positive 에게 암(positive)라 진단해야 함)
   - 반도체 : 정밀도(정확히 예측하는 제품을 생산해 정확하게 실제에 딱 맞춤)
```

---

**confusion matrix**

```python
confusion_matrix(y_train,pred)	# 실제값, 예측값
```

**테스트 데이터 셋 모델의 정확도 평가**

```python
classifier.predict(X_test)

#실제 관측값 출력
print(y_text.value)
```

```python
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix.accuracy_score

pred = classifier.predict(X_test) # X_test: test data(새로운 데이터 간주)
print(confusion_matrix(y_test,pred))	# 실제 라벨, 예측 라벨
>>>
[[0 1]
 [0 1]]
```
