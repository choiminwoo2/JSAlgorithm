//linearSearch([1,2,3],3)//2
//linearSearch([4,55,2,5],55) //1
//linearSearch([100],200) // -1
//linearSearch([3],3)// 0

/*
    입력값은 int형 배열과 int형 숫자
    출력값 : int형 숫자
    기능 : 배열에 속한 특정 숫자에 관한 배열 index 값 반환.
*/


const linearSearch = (arr,num) => {
    let rangeOfIndex = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return rangeOfIndex;
        }
        rangeOfIndex++;
    }
    return -1;
}