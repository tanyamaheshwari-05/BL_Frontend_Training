// Enter 3 Numbers do following arithmetic operation and find the one thatis maximum and minimum
// 1. a + b * c     3. c + a / b
// 2. a % b + c     4. a * b + c

let a= parseInt(process.argv[2]);
let b= parseInt(process.argv[2]);
let c= parseInt(process.argv[2]);
let op1= a + b* c
let op2= a % b + c
let op3= c + a / b
let op4= a * b + c
console.log(`1. a + b * c = ${op1}`);
console.log(`2. a % b + c = ${op2}`);
console.log(`3. c + a / b = ${op3}`);
console.log(`4. a * b + c = ${op4}`);
let max= op1
if(op2>max)
    max=op2;
if(op3>max)
    max=op3;
if(op4>max)
    max=op4;
let min=op1;
if(min>op2)
    min=op2;
if(min>op3)
    min=op3;
if(min>op4)
    min=op4;
console.log(`Maximum value: ${max}`);
console.log(`Minimum value: ${min}`);