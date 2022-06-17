// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

/*
    출력은 6, 60
    즉, 배열의 값을 모두 곱한 값.

    입력값 : 배열,
    출력 값 : 정수

    helper method 사용
    외부 함수에 출력할 sum 값을 1로 초기화
    내부 함수를 재귀함수로
    length가 0이라면 리턴.
    그렇지 않다면 배열의 첫번째 값을 곱한 이후
    slice를 통해 배열의 첫번째 인덱스를 잘라 새로운 배열을 생성
    이것을 반복하면서 배열의 모든 index의 곱을 구함.
*/

const productOfArray = (arr) =>{
    let sum = 1;
    function multiplyRecursion(arrInput){
        if(arrInput.length === 0){
            return;
        }
        //[2,7,3,6,2] 이란 배열이 들어왔다고 가정했을 때,
        // arrinput[0] = 2, arrinput[1] = 7 ... arr[4] = 2
        // 콜스택에 5번의 연산이 들어가게 된다.
        // 
        sum *= arrInput[0];

        multiplyRecursion(arrInput.slice(1))
    } 

    multiplyRecursion(arr);

    return sum;
}