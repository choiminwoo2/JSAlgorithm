// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


/*
    그냥 단어는 false,
    첫번째 인덱스 값과 마지막 인덱스 값이 같다면 true,
    단어가 단 1개라면 true 반환해야 tacocat이 true가 될 것이다.

    입력값 : string
    출력값: boolean
*/


const isPlaindrome = (word) => {
    //위의 조건에서 tacocat이 true이므로, 
    // 문자가 단 1개가 남는다면 true를 반환해야 함.
    if(word.length === 1) return true;
    // 두 문자를 비교하여 true, false 반환!
    if(word.length === 2) return word[0] === word[1];
    // 배열이 홀수일 경우 비교할 조건문! 
    // 마지막 배열이 2개라면 아래 코드가 문제가 발생함.
    // [1,1]이라 같으므로 true를 반환해야 하지만,
    // 아래 함수가 동작하면 빈 배열이 나와 false를 반환하는 문제가 발생하게 된다.!
    if(word[0] === word.slice(-1)) return isPlaindrome(word.slice(1,-1))

    return false;

}