function solution(box, n) {
    const max = box.map((el) => Math.floor(el / n));
    const answer = max.reduce((acc, cur) => acc * cur);
    return answer;
}