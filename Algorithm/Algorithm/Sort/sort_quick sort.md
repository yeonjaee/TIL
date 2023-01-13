## 퀵 정렬

- <u>기준 데이터를 설정</u>하고 그 **기준보다 큰 데이터와 작은 데이터의 위치**를 바꾸는 방법
- 일반적인 상황에서 가장 많이 사용되는 정렬 알고리즘 중 하나

- 기본적으로 병합 정렬과 더불어 대부분의 프로그래밍 표준 언어의 정렬 라이브러리의 근간이 되는 알고리즘
- 가장 기본적인 퀵 정렬은 **첫 번째 데이터를 기준 데이터(pivot)로 설정**



### 퀵 정렬 동작 예시

---

![image-20220126134237710](assets/sort_quick%20sort/image-20220126134237710.png)

**[step 0]** 현재 피벗의 값은 '5'이다. 왼쪽에서부터는 '5'보다 큰 데이터를 선택하므로 '7'이 선택되고, 오른쪽에서부터 '5'보다 작은 데이터를 선택하므로 '4'가 선택된다. 이제 이 두 데이터의 위치를 서로 변경.

![image-20220126134333007](assets/sort_quick%20sort/image-20220126134333007.png)

**[step 1]** 마찬가지로 피벗의 값을 기준으로 데이터를 선택하고, 데이터의 위치를 변경. 계속 수행.

![image-20220126134436707](assets/sort_quick%20sort/image-20220126134436707.png)

**[step 2]** 엇갈리는 경우 '피벗'과 **'작은 데이터'의 위치를 서로 변경**

![image-20220126134549711](assets/sort_quick%20sort/image-20220126134549711.png)

**[분할 완료]** 이제 '5' 기준으로 왼쪽은 5보다 작고, 오른쪽은 5보다 큼. 이렇게 <u>피벗을 기준으로 데이터 묶음을 나누는 작업</u>을 **분할**이라고 함



##### 왼쪽, 오른쪽 데이터 묶음 정렬

![image-20220126134710576](assets/sort_quick%20sort/image-20220126134710576.png)

![image-20220126134738805](assets/sort_quick%20sort/image-20220126134738805.png)

묶음에서도 정렬 작업을 재귀적으로 수행하다보면 완료될 것임.

---

### 퀵 정렬이 빠른 이유: 직관적인 이해

- <u>이상적인 경우</u> 분할이 절반씩 일어난다면 전체 연산 횟수로 O(NlogN)를 기대할 수 있다.

![image-20220126134857342](assets/sort_quick%20sort/image-20220126134857342.png)

- 데이터의 범위가 절반씩 줄어들기 때문에, 너비x높이 계산이 가능함,

---

### 퀵 정렬의 시간 복잡도

- 퀵 정렬은 평균의 경우 O(NlogN)의 시간 복잡도를 가짐.
- 하지만 최악의 경우엔 O(N^2)의 시간 복잡도를 가짐.(첫 번째 원소를 피벗으로 삼을 때, 이미 정렬된 배열)

---

### 퀵 정렬 소스코드: 일반적인 방식

```python
#python

array = [5,7,8,4,2,1,0,3,6,9]

def quick_sort(array,start,end):
    if start>=end:	# 원소가 1개인 경우 종료
        return
    pivot = start
    left = start+1
    right = end
    while (left<=right): # 엇갈리는 경우 while문 종료
        # 피벗보다 큰 데이터를 찾을 때까지 반복
        while(left<=end and array[left] <=array[pivot]):
            left +=1
       # 피벗보다 큰 데이터를 찾을 때까지 반복
    	while(right > start and array[right]>=array[pivot]):
            right -=1
        if(left>right): # 엇갈리는 경우 작은 데이터와 피벗을 교체
            array[right], array[pivot] = array[pivot], array[right]
        else: # 엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
            array[left], array[right] = array[right], array[left]
    # 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
    quick_sort(array,start,right-1)
    quick_sort(array,right+1,end)

quick_sort(array,0,len(array)-1)
print(array)
>>>
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

```c
# C

#include <stdio.h>

int number = 10;
int data[] = {1, 10, 5, 8, 7, 6, 4, 3, 2, 9};

void show() {
   int i;
   for(i = 0; i < number; i++) {
      printf("%d ", data[i]);
   }
}

void quickSort(int* data, int start, int end) {
   if (start >= end) { // 원소가 1개인 경우 그대로 두기 
      return;
   }
   
   int key = start; // 키는 첫 번째 원소
   int i = start + 1, j = end, temp;
   
   while(i <= j) { // 엇갈릴 때까지 반복
      while(i <= end && data[i] <= data[key]) { // 키 값보다 큰 값을 만날 때까지 
         i++;
      }
      while(j > start && data[j] >= data[key]) { // 키 값보다 작은 값을 만날 때까지 
         j--;
      }
      if(i > j) { // 현재 엇갈린 상태면 키 값과 교체 
         temp = data[j];
         data[j] = data[key];
         data[key] = temp;
      } else { // 엇갈리지 않았다면 i와 j를 교체 
         temp = data[i];
         data[i] = data[j];
         data[j] = temp;
      }
   } 
   
   quickSort(data, start, j - 1);
   quickSort(data, j + 1, end); 
}

int main(void) {
   quickSort(data, 0, number - 1);
   show();
   return 0;
}
```

