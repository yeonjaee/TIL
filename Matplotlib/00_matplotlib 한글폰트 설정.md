Matplotlib은 기본적으로 한글을 지원하지 않는다. 때문에 한글을 사용하려면 폰트를 명시적으로 지정해야 한다.



### 1. `title`, `label` 등등의 그래프 안의 정보를 한글로 저장하고 싶다.



- **`plt.rc('font',family='font name')`** 를 코드에 추가하면 된다.

- **`font name`**에는 **'Malgun Gothic'** 와 같은 한글 폰트의 영어 네임을 적어주자.

- 폰트의 영어 네임을 모르겠다면 아래와 같이 검색을 하여 찾으면 된다.

  ```python
  from matplotlib import font_manager # 먼저 font_manager을 임포트한다.
  
  for font in font_manager.fontManager.ttflist:	# 폰트 메니저에서
      if 'Malgun' in font.name:					# Malgun이라는 네임을 포함한 폰트이름을 찾아
          print(font.name, font.fname)			# 이름과 저장 위치를 출력한다
  ```

  ---

- OS에 맞는 다음 코드를 써도 된다.

  ```python
  from matplotlib import font_manager, rc
  import platform
  if platform.system() == 'Windows':
      path = 'c:/Windows/Fonts/malgun.ttf'
      font_name = font_manager.FontProperties(fname = path).get_name()
      rc('font', family = font_name)
  elif platform.system() == 'Darwin':
      rc('font', family = 'AppleGothic')
  else:
      print('Check your OS system')
  ```

