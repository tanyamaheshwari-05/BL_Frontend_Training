//Write a program that takes a input and  determine if  the number is prime 
let num=parseInt(process.argv[2]);
let isPrime=true;
if(num<=1){
    isPrime=false;
}
for(let i= 2; i*i<=num;i++){
    if(num % i === 0){
        isPrime= false;
        break;
    }
}
console.log(`Number ${num} is prime : ${isPrime}`);
