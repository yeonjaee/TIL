#  언어: python
#  메모리: 31256 KB
#  시간: 44 ms
#  코드길이: 927 B

n = int(input())  # 전체 사람의 수 입력 받기
people = []  # 각 사람의 몸무게와 키를 담을 리스트 초기화

# 각 사람의 몸무게와 키를 입력 받아 리스트에 추가하기
for i in range(n):
    x, y = map(int, input().split())
    people.append((x, y))

# 덩치 등수 계산 함수 정의
def calculate_rank(people):
    rank = [1] * n  # 덩치 등수를 1로 초기화

    # 한 사람씩 모든 사람들과 비교하기
    for i in range(n):
        for j in range(n):
            # 비교 대상이 되는 사람보다 덩치가 크다면 해당 사람의 덩치 등수를 1 증가시킴
            if people[i][0] > people[j][0] and people[i][1] > people[j][1]:
                rank[j] += 1

    return rank  # 각 사람의 덩치 등수를 반환함

# 덩치 등수 계산 함수 호출하여 결과 출력하기
for r in calculate_rank(people):
    print(r, end=' ')
