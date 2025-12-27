//Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2ⁿ.

let num = parseInt(process.argv[2]);
for(let i=0;i<=num;i++){
    console.log(`2^${i}=${Math.pow(2,i)}`);
}
