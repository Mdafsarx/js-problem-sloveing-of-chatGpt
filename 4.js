// Problem:
// Write a JavaScript function that takes a number as input and returns "Positive" if the number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.


function number(num){

    if(num>0){
        return 'positive'
    }
    else if(num===0){
        return 'zero'
    }
    else{
        return 'negative'
    }


}

const ans=number(-1)
console.log(ans)