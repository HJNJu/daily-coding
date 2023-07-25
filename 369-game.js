function solution(order) {
    var answer = 0;
    var order_array = String(order).split('');
    for (let i = 0; i < order_array.length; i++) {
        if (Number(order_array[i]) === 3 || Number(order_array[i]) === 6 || Number(order_array[i]) === 9) {
            answer ++;
        }
    }
    return answer;
}