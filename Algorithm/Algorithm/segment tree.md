### 세그먼트 트리

---

![An example Segment Tree](assets/segment%20tree/segtree_example_1.png)

- <u>**배열의 부분 합**</u>을 구할 때 사용하는 개념이다.
- 맨 아래의 단말 노드가 실제로 받아온 기존 데이터들을 의미한다.
- 부모 노드의 값은 그 자식 노드 값들의 합이다.
- **<u>세그먼트 트리를 이용하면 구간 합을 계산할 때 기존의 방법보다 획기적으로 속도가 빨라진다.</u>** **<u>O(logN)</u>**로 시간으로 처리할 수 있습니다.

---



![image-20220117163653017](assets/segment%20tree/image-20220117163653017.png)

위와 같이 0~11까지의 인덱스를 갖는 트리 구조가 있다고 할 때, 구간 합을 구한다.



#### 구간 합 트리 생성하기

빠르게 합을 구하기 위해서 '**구간 합 트리**'를 새롭게 생성해주어야 한다.



![image-20220117163858481](assets/segment%20tree/image-20220117163858481.png)

먼저 최상단에는 전체 원소를 더한 값이 들어간다. 이후에 2, 3번째 노드를 구한다. <u>2번째 노드는 인덱스 0부터 5까지의 원소를 더한 값</u>을 가지고, <u>3번째 노드는 인덱스 6부터 11까지의 원소를 더한 값</u>을 가진다. 말 그대로 원래 데이터의 범위를 반씩 분할하며 그 구간의 합들을 저장하도록 초기 설정을 하는 것이다. 이러한 과정을 반복하면 구간 합 트리의 전체 노드를 구할 수 있다.



![image-20220117164240514](assets/segment%20tree/image-20220117164240514.png)

결과적으로 구간 합 트리를 구하게 되면 이와 같다. 참고할만한 점은 구간 합 트리에 한해서는 인덱스 번호가 1부터 시작한다는 것이다<u>**. 1부터 시작하면 2를 곱했을 때 왼쪽 자식 노드를 가리키므로**</u> 효과적이기 때문이다.

```c
// start: 시작 인덱스, end: 끝 인덱스
int init(int start, int end, int node) {
	if(start == end) return tree[node] = a[start];
	int mid = (start + end) / 2;
	// 재귀적으로 두 부분으로 나눈 뒤에 그 합을 자기 자신으로 합니다. 
	return tree[node] = init(start, mid, node * 2) + init(mid + 1, end, node * 2 + 1);
}
```

또한 위의 경우 데이터의 개수가 12개인데 구간 합 트리의 원소 개수는 32개다. 때문에 데이터의 개수가 N개일 때  <u>N보다 큰 가장 가까운 N의 제곱수를 구한 뒤에 그것의 2배까지 미리 배열의 크기를 미리 만들어놓아야 한다</u>. **실제로는 데이터의 개수 N에 4를 곱한 크기만큼 미리 구간 합 트리의 공간을 할당하면 된다.**

![image-20220117203309431](assets/segment%20tree/image-20220117203309431.png)

따라서 구간 합 트리는 **<u>매 노드가 이미 구간의 합을 가지고 있는 형태</u>**가 된다고 할 수 있다.





#### 구간 합을 구하는 함수 만들기

트리 구조를 가지고 있기 때문에 데이터를 탐색함에 있어서 들이는 비용은 O(logN)이다. 따라서 구간 합을 항상 O(logN)의 시간에 구할 수 있다. 예를 들어 4~8의 범위에 대한 합을 구하고자 하면, 4~8 (인덱스 21, 11, 6)의 값을 사용하면 된다.

```c
// start: 시작 인덱스, end: 끝 인덱스
// left, right: 구간 합을 구하고자 하는 범위 
int sum(int start, int end, int node, int left, int right) {
	// 범위 밖에 있는 경우
	if(left > end || right < start) return 0;
	// 범위 안에 있는 경우
	if(left <= start && end <= right) return tree[node];
	// 그렇지 않다면 두 부분으로 나누어 합을 구하기
	int mid = (start + end) / 2;
	return sum(start, mid, node * 2, left, right) + sum(mid + 1, end, node * 2 + 1, left, right);
}
```



#### 특정 원소의 값을 수정하는 함수 만들기

특정 원소의 값을 수정할 때는 해당 원소를 포함하고 있는 모든 구간 합 노드들을 갱신해주면 된다. 예를 들어 인덱스 7의 노드를 수정한다고 하면 다음과 같이 5개의 구간 합 노드를 모두 수정하면 된다.

![image-20220117203645899](assets/segment%20tree/image-20220117203645899.png)

```c
// start: 시작 인덱스, end: 끝 인덱스
// index: 구간 합을 수정하고자 하는 노드
// dif: 수정할 값 
void update(int start, int end, int node, int index, int dif) {
	// 범위 밖에 있는 경우 
	if(index < start || index > end) return;
	// 범위 안에 있으면 내려가며 다른 원소도 갱신 
	tree[node] += dif;
	if (start == end) return;
	int mid = (start + end) / 2;
	update(start, mid, node * 2, index, dif);
	update(mid + 1, end, node * 2 + 1, index, dif);
}
```



