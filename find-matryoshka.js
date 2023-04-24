/* 러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴 */

function findMatryoshka(matryoshka, size) {
    // 제일 겉에 있는 마트료시카 사이즈를 운좋게 부르면 걍 트루 리턴..
    if (matryoshka.size === size) {
      return true;
    // 아니면 그 안 마트료시카가 있는지 보고,... 사이즈 다시 비교 
    } else if (matryoshka.matryoshka) {
      return findMatryoshka(matryoshka.matryoshka, size);
    // 안에 마트료시카가 없는 끝 마트료시카도 사이즈 안 맞다 -> 그럼 false
    } else {
      return false;
    }
}