// Problem:
// Write a Js method that takes an array of integers as input and returns the maximum number in the array.

function numbers(numbers){

    let maxNumber=numbers[0]
    for(const i of numbers){

if(i>maxNumber){

    maxNumber=i;

}
else{
    maxNumber
}


    }

return maxNumber;

}




const array=[10,20,30,40,50];

const output=numbers(array)
console.log(output)

