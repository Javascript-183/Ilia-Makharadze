//@ts-check
let arr=[1,2,3,4,5,12321,32,3123];
 
if(Array.isArray(arr)){
    console.log("this input is an array");
    
}else{
    console.log("this input is not array")
}

console.log(`first element is in array ${arr[0]}`);
console.log(`last element is in array ${arr.at(-1)}`);



let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];
console.log(`first choice is ${color[0]}`);
console.log(`second choice is ${color[1]}`);
console.log(`third choice is ${color[2]}`);


let student={
    firstName:"gela",
    lastName:"gelashvili",
    age:23,
    isMarried:true,
    cars:[{
        model1:"bmw picot",
        model2:"mercedes c63"

    }]
    
}

//monacemis damateba obiectshi
student.address="tbilisi";
student.faculty="computer science";
student["age"]=25;// sxva metodidac movaxdine obieqtze cvlileba
console.log(student.address);
console.log(student.age);
//monacemis washla
delete student["address"];
console.log(student);//check delete function

console.log(`write student's car ${student.cars[0].model1}`);

