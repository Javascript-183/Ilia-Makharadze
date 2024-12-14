function print10to1(){
    for(let i=10;i>=1;i--){
        console.log(i);
    }
}


function print10to1WithWhile(){
    let i=10;
    while(i>=1){
        console.log(i);
        i--;
    }
}
console.log("using for loop ");
print10to1();
console.log("using while loop");
print10to1WithWhile();