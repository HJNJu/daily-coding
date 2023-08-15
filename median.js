function solution(array) {
    let newArray = array.sort(function compare(a, b) {
        return a - b;
    })
    return newArray[Math.ceil(newArray.length / 2) - 1];
}