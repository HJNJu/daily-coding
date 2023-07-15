function solution(numbers) {
    var sorted = numbers.sort((a, b) => a - b);
    const positiveMax = sorted[sorted.length - 1] * sorted[sorted.length - 2];
    const negativeMax = sorted[0] * sorted[1];
    return Math.max(positiveMax, negativeMax);
}