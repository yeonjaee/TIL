## numpy

수학 및 과학 연산을 위한 파이썬 패키지, 편리하게 수치해석을 실행할 수 있다.  기본적으로 array라는 자료를 생성하고 이를 바탕으로 색인, 처리, 연산 등을 하는 기능을 수행한다. 이를 제일 많이 사용한다.



## numpy 라이브러리의 함수

```python
import numpy as np

np.array() # 입력받은 파이썬 리스트를 ndarray 생성
np.arange() # 범위 내의 원소로 ndarray 생성
np.zeros() # 0으로 채워진 행렬 생성
np.shape() # 행열 모양
np.reshape() # 행열 모양 재배열
np.ndim() # 차원 크기
np.size() # 원소의 개수

np.sum() # 총합
np.average(), np.mean() # 평균
np.add() # 덧셈
np.subtract() # 뺄셈
np.mulitply # 곱셈
np.divide # 나눗셈
np.mod # 나눗셈의 나머지

np.max(), np.min() ## 최대값,최소값
np.argmax(),np.argmin() # 최대값, 최소값의 위치
np.median() # 분산
np.std() # 표준편차
np.sqrt() # 제곱근 출력
np.pi # 원주율(파이)

np.around(), np.round()# 소수점 자리로 반올림

np.sin() # sin
np.cos() # cos

np.savetxt # 어레이를 텍스트 파일로 저장
np.loadtxt # 텍스트 파일 로드
```

---



