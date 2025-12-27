//Write a program to compute prime factors of a number N using prime factorization method.

let num = parseInt(process.argv[2]);
for(let i=2;i*i<=num;i++){
    while(num%i === 0){
        console.log(i);
        num/=i;
    }
}
if(num>1){
    console.log(num);
}