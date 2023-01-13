#### [1] pad

문자열을 삽입하기 위해 `pad`함수를 쓸 수 있다. 중요한 점은 **`pad`는 판다스 메소드**란 점이다. 때문에 Series에 문자열을 삽입하기 위해 `str`로 인식하게 하여 사용해야 한다.

---

**`Series.str.pad(총자리수, '삽입할 방향', '삽입할 문자') `**

---

```python
s1 = Series(['abc','def'])

>>>
# 0    abc
# 1    def
# dtype: object
```

```python
s1.str.pad(5, 'left', '!')
# 0    !!abc
# 1    !!def
# dtype: object

s1.str.pad(5, 'right', '^')
# 0    abc^^
# 1    def^^
# dtype: object
```

---





#### [2] cat

Series 내 서로 다른 원소를 결합한다.

---

`Series.str.cat()`

`Series.str.cat(sep='/')` : Series내 서로 다른 원소를 `'/'` 구분 기호와 함께 결합.

---

```python
s2 = Series(['abc','def','123'])

s2.str.cat()
>>>
# 'abcdef123'

s2.str.cat(sep='/')
>>>
# 'abc/def/123'
```