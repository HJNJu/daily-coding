function solution(my_string) {
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let answer = 0;
    let my_arr = my_string.split('');
    let answer_arr = [];
    for (let i = 0; i < my_arr.length; i++) {
        if (numbers.includes(my_arr[i])) {
            answer_arr.push(Number(my_arr[i]));
        }
    }
    answer = answer_arr.reduce((a, b) => a + b);
    return answer;
}