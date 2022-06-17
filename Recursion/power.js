const power = (base, exponent) =>{
    /*
        우선 콜 스택에 담는다.
        선입후출 FILO 이므로
        종료 조건문은 특정 값을 반환해야 
        이후에 콜스택을 통해 함수의 계산이 실제로 이루어진다.

    */

    // 밑이 base인 지수 exponent는 base가 무엇이든 0을 곱하면 1을 나오는 성질을 지니고 있다.
    if(exponent === 0){
        return 1;
    }
    
    //base에 자기자신을 호출하여 콜 스택에
    // -1씩 중첩시켜 마지막에 return 1값을 통해
    // base * 1
    // base * base
    // base * base * base
    // base * base * base ....
    // n번 실행한다. 
    return base * power(base, exponent -1);
}
debugger;
power(2,5)