// 선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴

function unpackGiftbox(giftBox, wish) {
    // 각 인덱스 확인,
    for (let i = 0; i < giftBox.length; i++) {
    // i번째 인덱스에 wish가 있으면 트루 리턴
      if (giftBox[i] === wish) {
        return true;
    // i번째 인덱스에 wish가 없으면, i번째 인덱스가 어레이인지 확인, 어레이이면,
      } else if (Array.isArray(giftBox[i])) {
    // 리컬시브로 내부 어레이 각 i 인덱스 확인,
        const result = unpackGiftbox(giftBox[i], wish);
    // wish가 있으면 트루 리턴이니까 트루 값 얻으면 트루 리턴
        if (result === true) {
          return true;
        }
      }
    }
    // 없으면 false
    return false;
}