function blankStringChecker(testString) {
    if(testString.length===0){
        return "this string is blank"
    }else {
        return "this string is not blank";
    }
}

const string1="";
const string2=" ";
const string3="Hello ";

console.log(blankStringChecker(string1));
console.log(blankStringChecker(string2));
console.log(blankStringChecker(string3));
