function fun(number,power){
    if(isNaN(number) || isNaN(power)){
        console.log("it must be only number")
    }else{
        let result=1;
        while(power>=1){
            result*=number;
            power--;
        }
        console.log(result);
    }
}

fun(4,2);