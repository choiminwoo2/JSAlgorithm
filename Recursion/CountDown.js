/* 
    카운트 다운을 재귀함수로 구현
*/

const countDown = (num) =>{
    if(num === 0){
        return console.log("recursion end")
    }
    console.log(num);
    num--;
    countDown(num);
}
debugger;
countDown(5)