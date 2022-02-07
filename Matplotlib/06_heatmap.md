## 히트맵

**`matshow()`** 함수

- **다양한 값을 갖는 숫자 데이터**를 열분포 형태와 같이 색상을 이용해서 시각화

- `plt.matshow(arr)`

  ```python
  import matplotlib.pyplot as plt
  import numpy as np
  
  arr = np.random.standard_normal((50, 100))
  # np.random.standard_normal()로 만들어진 **2차원 어레이 arr**는 표준정규분포를 갖는 (50, 100) 형태의 2차원 array
  
  plt.matshow(arr)
  
  plt.show()
  ```

  > ![다운로드 (20)](assets/06_heatmap/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(20)-16413716651071.png)

---



- 색상 범위 지정하기

  히트맵에 표시될 색상의 범위를 지정하기 위해서 **clim()** 함수를 사용한다.

  **`plt.clim($1, $2)`** : 색상의 범위를 $1~$2로 지정한다. arr의 값 중 $1 보다 작거나 $2 보다 큰 값에 대해서는 각각 $1,$2와 같은 색으로 나타낸다. **즉, 범위 안의 값들은 모두 다른 색으로 나타내나 범위 포함 밖의 값들은 모두 같은 색으로 나타낸다.**

