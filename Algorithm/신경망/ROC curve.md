## ROC curve

```python
# ROC curve 

import numpy as np 
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.datasets import make_classification 
from sklearn.neighbors import KNeighborsClassifier # k 근접 이웃 
from sklearn.ensemble import RandomForestClassifier # 앙상블_랜덤 포레스트 
from sklearn.model_selection import train_test_split 
from sklearn.metrics import roc_curve
from sklearn.metrics import roc_auc_score 


# roc curve 함수 정의 
def plot_roc_curve(fpr, tpr): 
    plt.plot(fpr,tpr, color='purple', label="ROC")
    plt.plot([0,1],[0,1], color='red', linestyle="--")
    plt.xlabel("false positive rate ")
    plt.ylabel("true posive rate")
    plt.title("Receiver Operating Characteristics(ROC) Curve")
    plt.legend  # 범례
    plt.show()
    
# fpr(false positive rate : 특이도(틀리도^^)
# tpr(true posive rate : 민감도, 재현율) 
```

```
 data_X, class_label = make_classification(n_samples=1000, n_classes=2, weights=[1,1], random_state=1)
```

```python
# Train, Test 분리 
train_X, test_X, train_y, test_y = train_test_split(data_X, class_label, test_size=0.3, random_state=1)
```

**random forest model 적용**

```python
# random forest model 적용

model = RandomForestClassifier()
model.fit(train_X, train_y)  # fit 은 반드시 train data로 
>>>
RandomForestClassifier()
```

테스트 데이터 셋으로 예측(확률 예측)

```python
# 테스트 데이터 셋으로 예측(확률 예측)

print(model.predict(test_X))  # 모델 예측 결과 값
>>>
[0 1 0 0 1 1 1 1 1 0 1 1 0 1 1 0 1 0 1 0 0 0 1 1 1 1 0 1 1 1 0 0 1 1 1 0 0
 0 1 0 0 1 0 0 1 0 1 1 1 0 0 1 0 0 0 0 1 1 0 0 0 0 1 0 0 0 0 0 1 1 1 0 1 0
 0 1 0 1 1 1 0 0 1 1 0 1 0 0 1 1 1 1 0 0 1 0 1 1 0 0 1 0 1 0 0 1 0 1 1 1 1
 0 1 1 1 1 1 0 1 0 0 0 0 1 1 0 1 1 1 1 1 0 1 1 0 1 0 1 1 1 1 1 0 0 1 0 1 0
 0 1 0 0 1 1 1 0 1 1 0 0 1 1 0 1 0 0 1 0 1 0 1 1 0 0 1 1 1 1 1 1 0 0 0 0 0
 1 0 0 1 1 0 1 1 1 0 0 0 1 1 0 0 0 0 1 1 0 0 1 1 0 1 1 0 0 1 1 0 1 0 0 1 0
 0 1 1 1 1 0 0 1 0 1 1 0 1 1 1 0 1 1 0 1 1 0 1 1 1 1 0 0 0 1 1 1 1 1 0 1 1
 0 1 0 1 1 1 1 1 1 0 1 1 1 0 0 1 1 1 1 1 1 0 1 0 1 1 1 1 0 1 1 0 0 0 0 0 0
 1 1 1 0]
```

`model.predict_proba(test_X) # 모델 예측 결과값이 나올 확률`

`probs = model.predict_proba(test_X)`

**성능 평가**

```
#positive class만 유지 
probs[:, 1]**
```

auc 구하기

```python
roc_auc_score(test_y, probs) # test data의 실제값, 예측값
```

roc curve 곡선 그리기

```python
auc = roc_auc_score(test_y, probs)

# roc curve 곡선 그리기 
fpr, tpr, thresholds= roc_curve(test_y, probs)
plot_roc_curve(fpr, tpr)
```

![다운로드 (1)](assets/ROC%20curve/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(1).png)