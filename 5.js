// Problem:
// Create a JavaScript function that takes an object representing a car, containing properties for its make, model, and year. The function should return a string in the format "Make: [make], Model: [model], Year: [year]".


const x=(car)=>{
return `Make: ${car.make}, Model: ${car.model},  Year: ${car['year']}`
    
}
const car={
    make:'bangladesh',
    model:'2020',
    'year':2022
}
const output=x(car);
console.log(output)