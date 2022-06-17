// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

/*
    피보나치 수열.
    f(1), f(2) = 1,
    f(n) = f(n-1) + f(n-2)이다.
*/
const fib = (num) =>{
    //피보나치 수열의 f(1), f(2) 는 1의 값을 가진다.
    if(num <= 0) return;
    if(num === 1 || num === 2){
        return 1;
    }
    // 스택에 큰 숫자부터 들어간다.
    // 즉 fib(n) = fib(n-1) + fib(n-2);
    // fib(n-1) = fib(n-2) + fib(n-3);
    // fib(n-2) = fib(n-3) + fib(n-4);
    // ....
    // fib(2) = 1, fib(1) =1
    // num이 점점 감소하면서 이런 리턴 값이 발견되면
    // 그 후 스택을 거슬러 올라가면서 fib(n)까지의 값을 찾는다.
    return fib(num-1) + fib(num -2)

}