/*
    countUniqueValues([1,1,1,1,1,2]) //2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
    countUniqueValues([]) //0
    countUniqueValues([2,-1,-1,0,1]) // 4
    
    1. 문제 파악.
    1번은 2개
    2번은 7개
    3번은 0개
    4번은 4개
    즉, 중첩아닌 고유한 숫자의 갯수

    입력값 = 매개변수 배열
    출력값 = 고유한 숫자의 개수
*/
//비효율적인 O(n제곱)으로 처리할때
const badCountUniqueValues = (arr)=>{
    let count = 0;
    if(arr.length ===0){
        return 0;
    }
    //i의 값이 진행될수록 그 전 값과 비교하여
    // arr[i] 와  arr[j] 의 값이 같다면
    // ex) [1,1,2]
    // arr[1] = 1; arr[0] =1
    // 이때 i 는 1; j = 1
    // 두 수가 같으므로 i=1 j=0 
    // arr[2] =2, arr[0] =1, arr[1] =1
    // i = 2 일때 j가 2를 진입했을 때,
    // 값이 같으므로 break;
    // 즉, 인덱스 i === j  일 때, 고유한 값을 가지므로
    // count++; 를 해준다.
    for(let i = 1; i < arr.length; i ++){
        let j=0;
        for(j=0; j < i; j++){
            if(arr[i] === arr[j]){
                break;
            }
        
        }
        if(i === j){
            count++;
        }
    }
    return count +1;
}
debugger;
badCountUniqueValues([1,1,2,2,3,3]);

//직접 해결한 코드 
const countUniqueValues = (arr) =>{
    let next = 1;
    let counter = 0;
    if(arr.length === 0){
        return 0;
    }
    while(next < arr.length){
        if(arr[counter] !== arr[next]){
            counter += 1;
            arr[counter] = arr[next];
        }
        else{
            next +=1;
        }
    }
    //맨 처음 숫자는 카운트 되지 않기 때문에 +1을 해줘야한다.
    return counter+1;
}

//for문으로 refactor
const countUniqueValues1 = (arr) =>{
   let counter = 0;

    //배열이 빈 배열일 때 0으로 반환 처리 
    if(arr.length === 0 ){
        return 0;
    }
    // 기능 처리
   for(let j = 1; j < arr.length; j ++){
       //counter 와 j가 다를 때, counter를 늘려주고 그 해당하는 인덱스 값을 arr[j]로 바꿔
       // 다음 j와 바뀐 i를 비교할 수 있게 한다.
       // ex ) [1,2,3,4,5,6,7]
       // 밑의 if문 동작시
       // arr[0] =1 -> arr[1] = 2 
        if(arr[counter] !== arr[j]){
            counter++;
            //중첩에 따라 arr[counter]가 만약 1이 5개고 6번째에 다른 숫자가 온다면
            //arr[counter] 의 인덱스는 5여야 한다.
            // 이 문제를 해결하기 위해서 counter가 늘어 났을 때, arr[j]의 값을 arr[counter] 에 대입한다.
            //ex ) [1,1,1,1,2,3]
            // arr[counter] 는 j가 2값일때 counter가 1 증가한다.
            // [1,2,1,1,2,3] 이런 형식이여야
            // 포문의 다음 j가 동작할 때
            // arr[counter] 와 j를 비교할 수 있다.
            // 만약 arr[counter]의 값을 변경하지 않는다면
            // ex) 위의 값은
            // [1,1,1,1,2,2]
            // 2가 중복이더라도 counter가 올라가게 되는 오류를 발생시킨다. 
            arr[counter] = arr[j];
        }
   }
   //배열의 첫번째 값은 counter 처리 하지 않으므로. +1 해야함.
   return counter +1;
}
debugger;
countUniqueValues1([1,1,1,2,2,2,2,2,2,2,2,3]);