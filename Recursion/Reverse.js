// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

/*
    문자를 반대로하여 출력.
    재귀를 통해서 구현하라.

    입력값 : 문자열
    출력값: 문자열
*/


const reverse = (word) => {
    // 1개의 문자는 그냥 str 반환.
    // 배열이 계속 줄기 때문에 결국 무한루프를 탈출하게 됨.
    if(word.length <= 1) return word;
    // 만약 min이라는 단어를 시작하면
    // 콜스택에 쌓이는 순서는
    // 1. in + m
    // 2. n + i
    // 3. n
    // 실행 n => 함수 결과값 n + i => ni + m => nim이 출력된다.
    return reverse(word.slice(1)) + word[0];

}
