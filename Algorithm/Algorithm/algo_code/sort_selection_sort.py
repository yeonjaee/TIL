# P
array = [7,5,9,0,3,1,6,2,4,8]

for i in range(len(array)):
    min_index = i	#가장 작은 원소의 인덱스
    for j in range(i+1,len(array)):     # 현재 가장 작은 원소보다 더 작은 원소가 있다면, 그 위치 인덱스 값이 min_index로 담김.
        if array[min_index] > array[j]:	   
            min_index = j
    array[i], array[min_index] = array[min_index],array[i]

print(array)