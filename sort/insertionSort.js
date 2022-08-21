function insertionSort(arr){
	let currentVal;
    for(let i = 1; i < arr.length; i++){
        //아래 배열에서 1부터 시작.
        //처음 반복문에서 j =0, 그리고 j가 current vlaue보다 큼
        //고로 [2,2,9,76,4] 가 됨.
        // j가 -1이 되어 탈출함.
        // 배열의 첫번째 인덱스 0은 currentValue로 바꿔줘야함.
        //j= -1  arr[0] = currentVal;
        //즉 arr[j+1] = currentVal;
        // 다음 동작
        // i = 2, currentValue = 9.
        // j = 1, currentvalue > arr[j] false
        // 반복문 탈출, arr[2] = 9 로 그대로 유지
        // i= 3, 76도 마찬가지로 i=2일 때 마냥 동작한다.
        // 마지막으로 4가 동작함.
        // i = 4, currentvalue = 4.
        // j = 3, [1,2,9,76,4] => [1,2,9,76,76]
        // j = 2, [1,2,9,76,76] => [1,2,9,9,76]
        // j가 1이되면서 반복문 탈출
        // arr[2] = 4 => [1,2,4,9,76]
        // i가 늘어나도 여기서 박복문 j가 -1 된 이후 조건문에 따라 false가 동작.
        // 반복문의 동작에서 처음은 초기화문 => 조건문 => 실행 => 감소 로 진행된다.
        // 반복할 때는, 먼저 증감식 => 조건문 => 실행문 순서로 진행한다.
        currentVal = arr[i];
        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])