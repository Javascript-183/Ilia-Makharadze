function squareOfNumber(a){
    if(isNaN(a)){
        return "it should be number";
    }
    return a*a;
}


function calculateToFarenheit(degree){
    if(isNaN(degree)){return "it should be number";}
    return degree*9/5+32 +" F";
}


function program(number,head,tail){//program which calculate this number is in diapazon or not

    if(isNaN(head) || isNaN(tail) || isNaN(number)){
        return "it must be only numbers";    
    }else{

        if(number>=head && number<=tail){
            return "this number is in range";
        }else{
            return "number is out of range";
        }
    }
}

function isLeapYear(year){
    if(isNaN(year)){
        return "it must be only numbers"
    }else{
        if(year%4===0 && year%100===0 && year%400===0){
            return "it is leap year";
        }else if(year%4===0 && year%100===0 && year%400!==0){
            return "it is not leap year";
        }else if(year%4===0){
            return "it is leap year";
        }
    }
}


function calculator(num1=parseFloat(prompt("enter first number")),opearation=prompt("enter operation"),num2=parseFloat(prompt("enter second number"))){
    if(isNaN(num1)||isNaN(num2)){
        alert(`it must be numbers only`);
        return;
    }else{
        switch(opearation){
            case "+":
                alert(num1+num2) ;
                break;
            case "-":
                alert(num1-num2);
                break;
            case "*":
                alert(num1*num2);
                break;
            case "/":
                if(num2===0){return "it's impossible for devision. second number will not be 0"}
                alert(num1/num2);
                break;
            default: 
                return "it must be from mathematic 4 operation like a +,-,*,/`)";    
            }
    }
}


calculator();

