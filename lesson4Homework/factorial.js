function factorialCalculator(number){
    if(isNaN(number)){
        console.log("it must be only number! ");
    }else{
        let result=1;
        if(number===0){
            result=1;
            console.log(result);
        }else{

            while(number>=1){
                result*=number;
                number--;
            }
            console.log(result);
        }
    }
}
factorialCalculator(0);