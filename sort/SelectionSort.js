const selectionSort = (arr) =>{

    // [6,4,7,2,9,10]의 오름차순 정렬
    // [0,1,2,3,4,5] 선택정렬은 인덱스를 통해 값을 변경함.
    // 6보다 작은값 4 min_index = 1
    // 4와 7 비교 min_index = 1
    // 4와 2 비교 min_index 3 이런식으로 진행하고
    // 배열을 끝까지 확인하고 인덱스를 통해 1번의 swap이 잰행됨.

    for(let i =0; i < arr.length; i++){
        let index_min = i;
        for(let j= i+1; j < arr.length; j++){
            if(arr[index_min] > arr[j]){
                index_min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[index_min];
        arr[index_min] = temp;
        console.log(arr);
    }
    return arr
}
selectionSort([6,4,7,2,9,10])