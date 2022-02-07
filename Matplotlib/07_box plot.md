## 박스 플롯

**`boxplot`**함수 사용

- 일반적으로 박스 플롯은 전체 데이터로부터 최소값, 제 1사분위 수, 제 2사분위 수 또는 중위수, 최대값의 다섯 가지 요약 수치를 사용해서 그려진다. 제 1사분위 수는 하위 25%에 해당하는 값, 2 사분위 수는 50%. 3사분 수는 전체 데이터 중 상위 25%에 해당하는 값이다.

- `raindint()`함수를 사용하여 임의의 데이터를 만들고, 박스 플롯으로 그래프화 했다.

  > ```python
  > import matplotlib.pyplot as plt
  > import random
  > 
  > result = []
  > 
  > for i in range(13):
  >     result.append(random.randint(1,1000))
  > print(sorted(result))
  > 
  > plt.boxplot(result)
  > plt.show
  > 
  > >>>
  > [60, 146, 204, 217, 317, 401, 440, 452, 476, 714, 846, 854, 856]
  > ```
  >
  > ![Figure 2022-01-08 204759](assets/07_box%20plot/Figure%202022-01-08%20204759-16416425658621.png)
  >
  > 
  >
  > 실행 결과에 따라 result라는 리스트에 저장된 숫자 중 최대값인 856이 맨 위, 중위값인 440이 중앙, 최소값인 60이 맨 아래에 위치함을 표시해주는 그래프를 볼 수 있다.
  >
  > 만약 위치 값이 알고 싶다면, 다음의 코드를 실행하면 된다.
  >
  > ```-python
  > import numpy as np
  > result = np.array(result)
  > print(&quot;1/4: &quot;str(np.percentile(result,25)))
  > print(&quot;2/4: &quot;str(np.percentile(result,50)))
  > print(&quot;3/4: &quot;str(np.percentile(result,75)))-
  > ```

---

- 수평 박스 플롯

  **`vert`** 파라미터를 False로 지정하면 수평 방향의 박스 플롯을 생성한다.

  > ```python
  > plt.boxplot(result,vert=False)
  > ```
  >
  > ![Figure 2022-01-08 205522](assets/07_box%20plot/Figure%202022-01-08%20205522.png)

---

