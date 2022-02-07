## 파이 차트

**`pie()`**함수

- 범주별 구성 비율을 원형으로 표현한 그래프이다.

- **부채꼴의 중심각을 구성 비율에 비례**하도록 표현한다.

  ```python
  size=[100,200,400,800]
  plt.axis('equal')	# 완벽한 원형 그래프 그리기
  plt.pie(size)
  plt.show()
  ```

  > ![다운로드 (14)](assets/05_pie%20chart/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(14).png)

---

- 레이블 추가 가능

  **데이터 셋의 개수에 맞게** label 이라는 리스트에 항목을 저장한다. 이후 `pie()`함수 내에 `labels=label`을 작성해주면 편하다. 

  ```python
  size=[100,200,400,800]
  label=['A','B','C','D']
  plt.axis('equal')
  plt.pie(size,labels=label)
  plt.show()
  ```

  > ![다운로드 (15)](assets/05_pie%20chart/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(15).png)

---

- 비율 및 범례 표시하기

  **`autopct` 속성(auto percent)**을 사용하여 어떤 형태로 값을 표시할지 작성하면 **각 항목의 비율을 자동으로 계산해서 표시**한다.

  **`plt.legend`**로 범폐를 표시한다

  ```python
  plt.pie(size,labels=label,autopct='%.1f%%')	# 소수점 2째 자리에서 반올림한 실수 값
  plt.legend(loc='upper left')	# 범례 표시, 위치는 상단 왼쪽
  plt.show()
  ```

  > ![다운로드 (16)](assets/05_pie%20chart/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(16).png)

  

---

- 색 및 돌출 효과 정하기

  레이블 추가 기능과 마찬가지로 **`color`**라는 리스트 생성 후 값을 넣고, `pie()` 함수 내에 `colors=color`을 입력한다. rgb 코드, hex code를 이용해서 더욱 다양한 색상을 지정할 수 있다.  [사용할 수 있는 색의 이름](https://matplotlib.org/stable/gallery/color/named_colors.html)

  **`explode`** 속성으로 돌출 효과를 설정할 수 있다. 데이터 크기와 순서에 맞게 [0 ~ n]의 값을 지정하면 된다.

  ```python
  color=['darkmagenta','deeppink','hotpink','pink']
  plt.pie(size,labels=label,autopct='%.1f%%',colors=color,explode=(0,0.2,0,0))
  # explode: 2번째 데이터 그래프를 0.2만큼 돌출시킨다
  ```

  >![다운로드 (17)](assets/05_pie%20chart/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(17).png)



---

- 시작 각도와 방향 설정

  **`startangle`**은 부채꼴이 (양의 방향 x축으로 부터) 그려지는 시작 각도를 설정한다. 디폴트는 0도.

  **`counterclock=False`**로 설정하면 시계 방향 순서로 부채꼴 영역이 표시된다.

  ```python
  plt.pie(~~,startangle=180, counterclock=False)
  ```

  > ![다운로드 (18)](assets/05_pie%20chart/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(18).png)



---

- 그림자 표시

  **`shadow=True`** 로 설정하면, 그림자가 표시된다.

---

- 정리

  ```lisp
  plt.pie(ratio,                  # 각 파이 숫자
          labels=labels,          # 각 파이 이름
          autopct='%.1f%%',       # 값의 표현 형태(소수점 첫째자리)
          startangle=260,         # 시작위치
          radius = 0.8,           # 파이 크기
          counterclock=False,     # 시계방향 진행 여부
          explode = explode,      # 중심에서 벗어나는 정도 설정(각각 서로 다른 숫자 전달 가능)
          colors=colors,          # 컬러맵 전달 가능
          shadow=False,           # 그림자 설정
          wedgeprops=wedgeprops)  # 부채꼴 모양 설정
  ```

  

