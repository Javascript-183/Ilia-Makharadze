function removeElement(array){
    for(let i=0;i<array.length;i++){
        if(array[i]==='Bob'){
            array.splice(i,1);
            break;
            }
        }
}
const arr=['John', 'Nick', 'Mary', 'Sue', 'Ann','Bob'];
const arr1=Array.from(arr);
removeElement(arr);
console.log(arr); 



//without loop
console.log(arr1);
const index=arr1.indexOf('Bob');
arr1.splice(index,1);
console.log(arr1);