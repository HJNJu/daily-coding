function solution(age) {
    var answer = ''
    var stringAge = age.toString();
    var arrayAge = stringAge.split('');
    var alphabets = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < arrayAge.length; i++) {
        answer += alphabets[stringAge[i]]
    }
    return answer;
}