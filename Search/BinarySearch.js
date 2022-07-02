//binarySearch([1,2,3,4,5],2) //1
//binarySearch([1,2,3,4,5],3) // 2
//binarySearch([1,2,3,4,5],6) // -1



/*

    처음 루트노드는 배열의 첫번째와 끝의 중간이다.

*/

const binarySearch = (arr,num) =>{
    //시작 값
    let start = 0;
    //마지막 값
    let end = arr.length -1;
    //중간 값 선의 중점을 구하는 공식 a + b / 2
    let middle = Math.floor((start + end) / 2);
    
    //middle 값이 찾으려는 num과 같다면 반복문 탈출해야 함.
    //또 시작점이 end 인덱스 값보다 커진다면 종료해야함
    while(arr[middle] !== num && start <= end){
        //중간 값이 더 크다면
        // 좌측 노드로 end를 변경
        if(num < arr[middle]){
            end = middle -1;
        }
        //중간값이 작다면
        //start를 중간값으로 이동
        else{
            start = middle +1;
        }
        //바뀐 start나 end 값을 middle에 다시 적용
        middle = Math.floor((start + end) / 2);
    }
    // binarySearch([1,2,3,4,5],2) 함수가 돌아가는 구조
    // start = 0, end = 4, middle = 2
    // 이 때, arr[middle] = 3, num = 2
    // 즉 middle이 더 크다
    // end = 2
    // start = 0, end = 2, middle = 1
    //  arr[middle] = 2, num =2 같으므로
    // 배열의 index는 1이다.

    if(arr[middle] === num){
        return middle;
    }
    return -1;
}