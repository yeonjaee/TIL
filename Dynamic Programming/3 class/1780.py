import sys
input = sys.stdin.readline


def count_values(board, x, y, n):
    counts = [0, 0, 0]
    for i in range(x, x + n):
        for j in range(y, y + n):
            counts[board[i][j] + 1] += 1
    return counts


def ans(board, x, y, n, memo):
    if n == 1:
        return count_values(board, x, y, n)

    if (x, y, n) in memo:
        return memo[(x, y, n)]

    counts = [0, 0, 0]
    subgrid_size = n // 3

    for i in range(3):
        for j in range(3):
            sub_counts = ans(board, x + i * subgrid_size, y + j * subgrid_size, subgrid_size, memo)
            for k in range(3):
                counts[k] += sub_counts[k]

    memo[(x, y, n)] = counts
    return counts


if __name__ == "__main__":
    N = int(input())
    board = [list(map(int, input().split())) for _ in range(N)]
    memo = {}
    counts = ans(board, 0, 0, N, memo)
    for count in counts:
        print(count)
