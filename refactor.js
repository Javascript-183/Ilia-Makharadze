function capitalizeFirstLetter(str){
    if(str.length===0){
        return str;
    }else{
        return str[0].toUpperCase()+str.slice(1);
    }
}

let result="sdasdas";
console.log(capitalizeFirstLetter(result));
