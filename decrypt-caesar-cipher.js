/* 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴
   카이사르 암호(Caesar cipher): 평문(plaintext)을 암호키 secret개만큼 (오른쪽으로) 평행이동시켜 암호화 
   복호화: 암호화된 문자열을 원래의 평문으로 복원 */

   function decryptCaesarCipher(str, secret) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let encrypted = '';
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        encrypted = encrypted + ' ';
      } else {
        let order = alphabet.indexOf(str[i]);
        // 복호화는 반대 방향으로 이루어기 때문에 seceret을 뺀다.
        let tobe = (order - secret + alphabet.length) % alphabet.length;
        encrypted = encrypted + alphabet[tobe];
      }
    }
    return encrypted;
  }
  