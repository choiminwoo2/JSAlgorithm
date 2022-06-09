/*
입출력 예시:
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true


1. 문제 파악
입력은 함수 안에 매개변수로 문자열(소문자).
출력은 boolean 형 
문자의 빈도수를 구해 빈도수가 같다면 true 아니라면 false 반환
*/

// 문제 솔루션
function validAnagram(first, second){
    // 우선 배열의 길이가 같지 않다면 false
    if(first.length !== second.length){
        return false;
    }
    // 빈도수를 확인할 객체 생성 
    const lookup = {};
    
    //첫번째 문자의 빈도수를 샌다.
    for(let char= 0; char <= first.length; char++ ){
        let letter = first[char];
        //문자가 존재 하지 않는다면 1로 추가, 이미 존재한다면 객체에 존재하는 key에 +1

        // 초기 코드 (js의 삼항연산자로 refactor 필요.)
        // if(lookup[letter]){
        //     lookup[letter] += 1;
        // }else{
        //     lookup[letter] =1
        // }
        //삼항연산 사용
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    //두번째 루프 시작
    for(let char=0; char <= second.length; char++){
        let letter = second[char];
        //만약 두번째 문자열에 같은 문자가 존재하지 않는다면 false를 반환한다.
        if(!(lookup[letter])){
            return false;
        }
      //두번째 문자의 빈도수를 비교하여 lookup에서 -1을 한다.
      lookup[letter] -= 1;
    }
  //모든 조건을 넘겼다면 객체는 서로 같으므로 true 반환
  return true;
    
  }