## 막대 그래프

**`bar()`함수**

- 범주가 있는 데이터 값을 직사각형 모양의 막대 그래프로 나타낸 것.

- ```
  plt.bar(x,y)
  가로축 데이터 x, 세로축 데이터 y가 반드시 필요하다.
  ```

  > ```python
  > import matplotlib.pyplot as plt
  > plt.bar([1,2,3,4],[12,43,25,15])
  > plt.show()
  > ```
  >
  > ![다운로드 (8)](assets/03_bar%20graph/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(8).png)

---



- color 파라미터를 사용하여 각각의 막대의 색상을 지정할 수 있다.

  `plt.bar([1,2,3,4],[12,43,25,15],color=['r','g','y','b'])`

  > ![다운로드 (9)](assets/03_bar%20graph/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(9).png)

---



- 막대의 폭을 설정할 수 있다.

  **`width= $`**. 디폴트는 0.8 이다.

---



- 스타일 꾸미기

  ```python
  plt.bar([1,2,3,4],[12,43,25,15],align='edge', edgecolor='lightgray',
          linewidth=5, tick_label=['1','2','3','4'])
  plt.show()
  ```

  > ![다운로드 (10)](assets/03_bar%20graph/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(10).png)

  - **align**은 눈금과 막대의 위치를 조절함. 디폴트 값은 ‘center’이며, ‘edge’로 설정하면 막대의 왼쪽 끝에 눈금이 표시된다.
  - **edgecolor**는 막대 테두리 색, **linewidth**는 테두리의 두께를 지정함.
  - **tick_label**을 리스트 또는 어레이 형태로 지정하면, 틱에 문자열을 순서대로 나타낼 수 있다.

---



- 수평 막대 그래프

  `bar()`함수 대신에 `barh()` 함수를 쓰면 된다.

  > ![다운로드 (11)](assets/03_bar%20graph/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(11).png)