let choice=parseInt(process.argv[2]);
let value=parseInt(process.argv[3]);
if(choice === 1){
    celsiusToFah(value)
}
else if(choice === 2){
    FahToCelsius(value)
}
else{
    console.log("Please choose 1 or 2");
}
function celsiusToFah(C){
    if(C<0 || C>100){
        console.log("Invalid temperature! Celsius out of range");
        return;
    }
    console.log("Fahrenhite : ",(C*9/5)+32);
    
}
function FahToCelsius(F){
    if(F<32 || F>212){
        console.log("Invalid temperature! Fahrenhite out of range");
        return;
    }
    console.log("Celsius : ",(F-32)*5/9);
    
}