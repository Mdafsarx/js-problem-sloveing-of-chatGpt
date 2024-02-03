// Write a Python function that takes a list of numbers as input and returns the sum of all the numbers in the list.

const Python=(numbers)=>{

    let sum=0;
    let i=0;
    while(i<numbers.length){

sum=sum+numbers[i];

        i++
    }
    return sum;

}

const array=[10,20,30,40,50];
const output=Python(array);
console.log(output)