#### 이진 트리

---

이진 트리란 **자식노드가 최대 두 개인 노드들로 구성된 트리**이다. 





#### 구조

---

이진 트리의 노드 구조

![image-20220117141113035](assets/binary%20tree/image-20220117141113035.png)





###### 포화 이진 트리(정 이진 트리)

- <u>모든 레벨에서</u> 노드들이 꽉 채워진 이진트리이다.

  ![img](assets/binary%20tree/edCd7lU.png)



###### 완전 이진 트리

- <u>마지막 레벨을 제외한 모든 레벨에서</u> 노드들이 꽉 채워진 이진트리이다.

  ![img](assets/binary%20tree/mXssEqj.png)



###### 편향 이진 트리

- 노드들이 한쪽으로 편향되어 생성된 이진트리이다.

  <img src="assets/binary%20tree/Skewed-Binary-Tree-Example.png" alt="Left Skewed Binary Tree | Gate Vidyalay" style="zoom:67%;" />



#### 이진 트리의 운행법

---

트리를 구성하는 각 노드들을 특정한 방법으로 한 번씩 방문하는 방법을 순회(운행법)이라 한다.

- 이진 트리를 운행하는 방법은 산술식의 표기법과 연관성을 갖는다.

- 트리의 정보를 시각적으로 확인할 수 있다.

- 대표적인 이진 트리의 순회 방법은 다음 세 가지가 있다.

  ![image-20220117141655306](assets/binary%20tree/image-20220117141655306.png)

  - **Preorder 순회**(전위 순회):  Root -> Left -> Right. A -> B - > C
  - **inorder 순회** (중위 순회): Left -> Root -> Right. B -> A - > C
  - **postorder 순회**(후위 순회): Left -> Right -> Root. B -> C - > A 
  - 이름은 <u>Root의 위치가 어디 있느냐</u>에 따라 정해진 것이다. 즉, Root가 앞(pre))에 있으면 전위, 안(in) 에 있으면 중위, post(뒤)에 있으면 후위이다.
