function solution(n) {
    const sqrt = n ** (1/2);
    return sqrt % 1 == 0 ? 1 : 2
}