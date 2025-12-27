// Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
let numbers=[];
for(let  i=0;i<5;i++){
    numbers.push(Math.floor(Math.random()*900)+100);
}
let max= numbers[0];
let min= numbers[0];
for(let i=1;i<numbers.length;i++){
    if(numbers[i]<min){
        min=numbers[i];
    }
    if(numbers[i]>max){
        max=numbers[i];
    }
}
console.log("Numbers : ",numbers);
console.log("Minimum : ",min);
console.log("Maximum : ",max);
