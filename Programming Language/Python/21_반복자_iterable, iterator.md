### 'iterable object'

`반복 가능한 객체`

말 그대로 반복할 수 있는 객체이다.  string, lists, tuples, dictionaries, and sets 등은 iterator 객체이다.

즉, 요소가 여러 개 들어있고, 한 번에 하나씩 꺼낼 수 있는 객체이다.

객체가 반복 가능한지 알아보는 방법은 `__iter__` 메서드가 들어있는지 확인해보면 된다.

> ```python
> >>> dir([1, 2, 3])
> ['__add__', '__class__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
> ```
>
> 리스트 [1, 2, 3]을 dir로 살펴보면 __iter__ 메서드가 들어있다.

리스트의 이터레이터를 변수에 저장한 뒤 __next__ 메서드를 호출해보면 요소를 차례대로 꺼낼 수 있다.

> ```python
> >>> it = [1, 2, 3].__iter__()
> >>> it.__next__()
> 1
> >>> it.__next__()
> 2
> >>> it.__next__()
> 3
> >>> it.__next__()
> Traceback (most recent call last):
> File "<pyshell#48>", line 1, in <module>
>  it.__next__()
> StopIteration
> ```
>
> it에서 `next`를 호출할 때마다 리스트에 들어있는 값이 나온다. 그리고 3 다음에 `next`를 호출하면 StopIteration 예외가 발생한다. 즉, [1, 2, 3]이므로 1, 2, 3 세 번 반복한다.



### 'iterator'

`반복자`

: 값을 차례대로 꺼낼 수 있는 객체.

: 모든 Iterator는 Iterable이지만, 모든 Iterable은 Iterator가 될 수 없다.



정리하자면 반복 가능한 객체는 요소를 한 번에 하나씩 가져올 수 있는 객체이고, 이터레이터는 `next` 메서드를 사용해서 차례대로 값을 꺼낼 수 있는 객체이다.  즉, 반복 가능한 객체에서 `iter` 메서드로 이터레이터를 얻는다.



[1] `iter()`함수 : Return an [iterator](https://docs.python.org/2/glossary.html#term-iterator) object

```python
iter(호출가능한객체, 반복을끝낼값)
#object : 필수, 반복 가능 객체
#sentinel: 객체가 호출 가능하고, 호출하여 반환된 값이 센티넬과 같을 때 반복을 중지한다.

>>> import random
>>> for i in iter(lambda : random.randint(0, 5), 2):
...     print(i, end=' ')
...
3 1 4 0 5 3 3 5 0 4 1 

cf. reversed() 함수: 역순으로 반복 가능 객체 반환
```

반복자 함수의 응용 중 하나는 특정 줄에 도달할 때까지 파일의 줄을 읽는다.

```python
with open('mydata.txt') as fp:
    for line in iter(fp.readline, ''):
        process_line(line)
```



[2] `next()` 함수 : Retrieve the next item from the *iterator* by calling its [`next()`](https://docs.python.org/2/library/stdtypes.html#iterator.next) method

- 반복자를 입력받아 다음 출력값을 반환한다.

```python
next(반복가능한객체, 기본값)
>>> it = iter(range(3))
>>> next(it, 10)
0
>>> next(it, 10)
1
>>> next(it, 10)
2
>>> next(it, 10)
10
>>> next(it, 10)
10
```

기본값을 지정하면 반복이 끝나더라도 StopIteration이 발생하지 않고 기본값을 출력한다. 즉, 반복할 수 있을 때는 해당 값을 출력하고, 반복이 끝났을 때는 기본값을 출력한다는 것.
