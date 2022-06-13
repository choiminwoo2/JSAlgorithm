/*
    sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
    sumZero([-2,-1,3]) // undefined
    sumZero([1,2,3]) // undefined

    O(n제곱) 방식.
    const sumZero = (arr) =>{
    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j <arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i],arr[j]];
            }
        }
    }
}
*/

/*
    
*/
const sumZero = (arr) =>{
    let left = 0;
    let right = arr.length -1;
    while(left <= right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }
        //우측 배열의 인덱스의 value가 더크면 sum > 0 
        else if(sum > 0){
            right -=1;
        }
        //sum < 0 썸이 음수라면
        else{
            left += 1;
        }
    }
   
}
debugger;
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,-1,3]) // undefined
sumZero([1,2,3]) // undefined