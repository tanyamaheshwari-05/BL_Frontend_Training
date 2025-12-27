//Write a program that takes User Inputs and does Unit Conversion of different Length units 1. Feet to Inch 3. Inch to Feet 2. Feet to Meter 4. Meter to Feet

let choice = parseInt(process.argv[2]);
let value = parseFloat(process.argv[3]);

switch(choice){
    case 1: 
    console.log(`${value} feet = ${value * 12} inches`); 
    break;
    case 2: 
    console.log(`${value} feet = ${value * 0.3048} meters`); 
    break;
    case 3: 
    console.log(`${value} inches = ${value / 12} feet`); 
    break;
    case 4: 
    console.log(`${value} meters = ${value / 0.3048} feet`); 
    break;
    default: console.log("Invalid choice");
}
