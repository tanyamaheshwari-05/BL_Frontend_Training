//Write a program that computes the factorial using

let num = parseInt(process.argv[2]);
let fact=1;
for(let i=1;i<=num;i++){
    fact*=i
}
console.log(`Factorial of number ${num} is : ${fact}`);
