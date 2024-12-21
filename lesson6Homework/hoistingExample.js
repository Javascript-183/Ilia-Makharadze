sumOfDigits(134);//hoisitng function example. we can call function top and end for funcion.result will be same;
function sumOfDigits(num){
    let sum=0;
    if(isNaN(num)){
        console.log("it must be only number")
    }else{
        _num=num;
        while(num>0){
            sum+=num%10;
            num=Math.floor(num/10);
        }
        console.log(`sum of digit of ${_num} is ${sum}`);
    }
}
sumOfDigits(134);

sumOfDigits(1231231);