function solution(rsp) {
    var answer = '';
    for (choice of rsp) {
        if (choice === '2') {
            answer += '0';
        } else if (choice === '0') {
            answer += '5';
        } else {
            answer += '2';
        }
    }
    return answer;
}