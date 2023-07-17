function solution(my_string) {
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var answer = [];
    for (el of my_string) {
        if (nums.includes(el)) {
            answer.push(Number(el));
        } 
    }
    return answer.sort();
}