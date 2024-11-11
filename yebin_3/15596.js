//정수 n개의 합을 구하는 함수 작성
//정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.

function func(arr){
    var sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
}
const arr = [1,2,3,4,5];
func(arr);