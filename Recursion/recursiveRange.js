// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

/*
    6 = 1 2 3 4 5 6 sum = 21
    10의 수열의합 55
*/
function recursiveRange1(x){
    // 사실 합에 대한 함수는 공식을 사용하는 것이 제일 좋다
    //O(1)이라고 볼 수 있기 때문이다.
    return ( x * (x -1)) /2
}
//재귀로 인한 해결방법이지만, 메모리 스택에 O(n)만큼 들어가므로 좋지는 않다.  

function recursiveRange(x){
    if (x === 0 ) return 0;
    return x + recursiveRange(x-1);
 }