# 등차수열의 차이를 '공차'라 한다.
# 여기서 공차가 0일 경우에도 등차수열로 인정한다..
# 때문에 1,2,3,4,....,99 은 모두 등차수열이다. **공차가 0, 1 ,-1 이다.**

def hansu(num):
    hansu = 0
    for i in range(1, num+1):
        num_list = list(map(int, str(i)))	# 숫자의 자릿수로 분리
        if i < 100:
            hansu += 1
        elif num_list[0]-num_list[1] == num_list[1]-num_list[2]:
            hansu += 1
    return hansu

num = int(input())
print(hansu(num))