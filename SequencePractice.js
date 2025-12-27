//Random Function Math.floor(Math.random() * 10); to get Single Digit. :
let number=Math.floor(Math.random()*10);
console.log(number);

//Use Random to get Dice Number between 1 to 6 : 
 let dicenumber = Math.floor(Math.random()*6)+1;
 console.log("Random dice number:",`${dicenumber}`);

//Add two Random Dice Number and Print the Result :
let dice1= Math.floor(Math.random()*6)+1;
let dice2= Math.floor(Math.random()*6)+1;
console.log(`Dice1:${dice1}, Dice2:${dice2}, Sum:${dice1+dice2}`);

//Write a program that reads 5 Random 2 Digit values , then find their sum and the average :
let sum=0;
for(let i=0;i<5;i++){
    let num=Math.floor(Math.random()*90)+10;
    console.log(`Numbers ${i+1}`,num);
    sum+=num;
}
console.log(sum);
let avg= sum/5;
console.log(avg);

// Use Script & Debug – Unit Conversion   

//a. 1ft = 12 in then 42 in = ? ft  
let inches = 42;
let feet = inches/12;
console.log(`42 inches = ${feet} feet` );

// b. Rectangular Plot of 60 feet x 40 feet in meters (1 feet=0.3048 meter)
let lenFt = 60;
let widFt = 40;
let lenM = lenFt * 0.3048;
let widM = widFt*0.3048;
console.log(`Rectangular plot of 60 feet * 40 feet in meters = ${lenM} m * ${widM} m`);

// c. Calculate area of 25 such plots in acres (1 acres = 43560 sq ft)
 let areaOfPlotFt = lenFt * widFt;
 let totalAreaOf25Plot =  areaOfPlotFt *25;
 let areaInAcres = totalAreaOf25Plot/43560;
 console.log(`Area of 25 plots in acres : ${areaInAcres}`);

