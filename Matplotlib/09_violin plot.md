## 바이올린 플롯



**`violoin plot()`** 은 박스 플롯과 비슷하지만 데이터의 분포와 범위를 한눈에 보기 쉽게 나타내어 더 실제에 가까운 분포를 알 수 있다.

- 예시

  ```python
  import matplotlib.pyplot as plt
  import numpy as np
  
  # 1. 기본 스타일 설정
  plt.style.use('default')
  plt.rcParams['figure.figsize'] = (4, 3)
  plt.rcParams['font.size'] = 12
  
  # 2. 데이터 준비
  # 세 개의 난수 데이터 어레이를 리스트 형태로 입력
  np.random.seed(0)
  data_a = np.random.normal(0, 2.0, 1000)
  data_b = np.random.normal(-3.0, 1.5, 500)
  data_c = np.random.normal(1.2, 1.5, 1500)
  
  # 3. 그래프 그리기
  fig, ax = plt.subplots()
  
  violin = ax.violinplot([data_a, data_b, data_c], positions=[2, 3, 4])
  ax.set_ylim(-10.0, 10.0)
  ax.set_xticks([1, 2, 3, 4, 5])
  ax.set_xlabel('Data Type')
  ax.set_ylabel('Value')
  
  plt.show()
  ```

  - **ax.violinplot()**는 주어진 데이터 어레이의 분포를 바이올린의 형태로 시각화함.
  - **positions** 파라미터는 바이올린 플롯의 x 위치를 지정. 지정하지 않으면 1, 2, 3.. 의 순서로 그려짐.
  - **ax.set_xticks([1, 2, 3, 4, 5])**를 통해 x축의 눈금을 지정했고, **[2, 3, 4]**의 위치에 그래프가 그려짐.

  > ![image-20220205220710742](assets/09_violin%20plot/image-20220205220710742.png)




#### 분위수 지정

```python
# 3. 그래프 그리기
fig, ax = plt.subplots()

violin = ax.violinplot([data_a, data_b, data_c], quantiles=[[0.25, 0.75], [0.1, 0.9], [0.3, 0.7]])
ax.set_ylim(-10.0, 10.0)
ax.set_xticks(np.arange(1, 4))
ax.set_xticklabels(['A', 'B', 'C'])
ax.set_xlabel('Data Type')
ax.set_ylabel('Value')

plt.show()
```

- **ax.violinplot()**의 **quantiles** 파라미터는 데이터 분포의 분위수를 표시.(0.0에서 1.0 사이의 숫자를 리스트의 형태로 입력한다.)
- 위 코드는 data_a에 대해 **25%, 75%**의 위치에, data_b에 대해 **10%, 90%**의 위치에, data_c에 대해 **30%, 70%**의 위치에 분위수 직선을 표시함.

> ![image-20220205222035072](assets/09_violin%20plot/image-20220205222035072.png)

