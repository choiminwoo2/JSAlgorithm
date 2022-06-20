// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false



/*
    배열의 값 중 하나라도 만족하는 배열의 index가 존재한다면 true 반환!
    매개변수는 2개.
    입력값 1. 배열
    입력값 2. 조건절을 처리할 콜백 함수.

    출력값 3. boolean
*/
const isOdd = val => val % 2 !== 0;
const someRecursive = (arr, callBackCondition) => {
   if(arr.length ===0) return false;
   if(callBackCondition(arr[0])) return true;
   return someRecursive(arr.slice(1), callBackCondition);

}