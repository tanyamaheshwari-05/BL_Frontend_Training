//Write a program that takes a command-line argument n and prints the nth Harmonic Number .

let num =parseInt(process.argv[2]);
let harmonic=0;
for(let i=1;i<=num;i++){
    harmonic+=1/i;
}
    console.log(`Harmoic numbers: ${harmonic}`)
