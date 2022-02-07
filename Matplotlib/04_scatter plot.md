## 산점도

`scatter()`함수

- ```python
  plt.scatter(x,y)
  ```

- x,y는 **array or list** 이며 반드시 **same size** 여야 한다.

  

```python
import matplotlib.pyplot as plt
import numpy as np

x = [1,2,3,4,5,6,7,8,9,10]
y = [4,8,5,9,1,1,4,3,4,7]

plt.scatter(x, y)
plt.show()
```

> ![다운로드 (12)](assets/04_Scatter%20plot/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(12).png)

---



- 색상과 크기 지정하기

  - **scatter()** 함수의 **s, c** 파라미터는 각각 마커의 크기와 색상을 지정한다.

  - `plt.scatter(x, y,s=200,c='red')`

    > ![다운로드 (13)](assets/04_Scatter%20plot/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(13).png)

---



- 투명도, 컬러바 설정하기
  - **alpha** 파라미터는 마커의 투명도를 지정한다. 0에서 1 사이의 값을 입력한다.
  
  - `scatter() 함수`에 **c** 속성을 추가하고, 표현하고 싶은 색상의 개수를 설정하면 각 데이터에 해당하는 컬러바의 색으로 정해진다. **`plt.colorbar()`** 작성해야 보인다.
  
    - **shrink** 파라미터는 컬러바의 크기를 결정함. 디폴트 값은 1.0.
    - **aspect** 파라미터는 컬러바의 종횡비 (Aspect ratio)를 결정함. 디폴트 값은 20.
    - `plt.colorbar(shrink=0.8,aspect=5)`
  
  - 그리고 **cmap** 파라미터를 사용하면 컬러맵에 해당하는 색상의 종류를 지정할 수 있다. [사용할 수 있는 색상의 종류](https://matplotlib.org/stable/tutorials/colors/colormaps.html)
  
    > ```python
    > plt.scatter(x, y, alpha=0.5, c=range(10),cmap='jet')
    > plt.colorbar()
    > plt.show()
    > ```
    >
    > ![다운로드 (19)](assets/04_Scatter%20plot/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(19).png)
  
    > ![Miscellaneous colormaps](assets/04_Scatter%20plot/sphx_glr_colormaps_007-16413711799712.png)

