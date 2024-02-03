// get input some number and return the min number


const MinNumber=(number)=>{

    let min=number[0];
    for(const num of number){

        if(num<min){
        min=num;
    }


    }
return min

}
const array=[12,2,43,65,77,89];
const output=MinNumber(array);
// console.log(output);


// find max number with by function

const input=function(number){

    let i=0;
    let max=number[0];
    while(i<number.length){
const everyNumber=number[i];

if(everyNumber>max){
    max=everyNumber;
}
i++
    }
    return max


}
const manyNumbers=[10,20,30,40,50,60,70,80];
const ans=input(manyNumbers);
console.log(ans)
