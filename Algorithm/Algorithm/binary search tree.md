#### 이진 탐색 트리(binary search tree)

---

이진 트리에서 몇가지 특징이 추가된 것을 의미한다.

![Binary Search Tree | Example | Construction | Gate Vidyalay](assets/binary%20search%20tree/Binary-Search-Tree-Example.png)



#### 특징

---

1. 왼쪽 서브 트리는 루트 노드보다 모두 작은 값을 가진다

2. 오른쪽 서브 트리는 루트 노드보다 모두 큰 값을 가진다
3. 각 서브 트리도 ➊, ➋ 특징을 갖는다
4. 모든 노드 값은 중복되지 않는다 . 즉 , 중복된 값은 이진 탐색 트리에 저장할 수 없다





#### 장단점

---

- 입력 시 값에 따라 곧바로 위치가 지정되기 때문에 데이터 검색 속도가 빠르다. 
- 다만 최악의 경우, 한 쪽으로 편향되어 이어질 수가 있다. 
- 이를 보완할 트리들로는 AVL tree, red black tree 등이 있다.