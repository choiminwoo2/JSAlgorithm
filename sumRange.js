const sumRange = (arr, num) =>{
    if(num > arr.length){
        return undefined;
    }
    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;
    for(let i = num; i <arr.length; i++){
        //[1,2,3,4,5,6,7,8]
        //처음 maxSum이 1,2,3 즉 6이라면
        // 한칸씩 뒤로 밀어
        // [2,3,4] 다음의 합 8이 나온다.
        tempSum = tempSum - arr[i - num] + arr[i];
        //즉 tempSum이 maxsum보다 크다면 
        // maxSum에 tempSum을 대입한다. 
        // 이것을 배열이 끝날때까지 반복
        if(tempSum > maxSum){
            maxSum = tempSum;
        }
    }
    return maxSum;
}
debugger;
sumRange([1,2,5,2,8,1,5],2)
