// Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
let side = Math.floor(Math.random()*2);
console.log(`Random number from 0 and 1 :${side}`)
if(side==0){
    console.log("Heads");
}
else{
    console.log("Tails");
}