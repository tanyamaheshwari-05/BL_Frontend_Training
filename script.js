//  Function Declaration
 greet();
function greet(){
    console.log("Tanya");
}


// Function Expression
var greet= function(name){
    console.log("Hello "+ `${name}`);
}
greet("Tanya");


// Arrow Function
const greet=(name)=>{
console.log("Hello "+`${name}`);
}
greet("Tanya");


// CallBack
function greet(name,callstack){
    console.log("Hello "+`${name}`);
    callstack();
}
function SayBye(){
    console.log("Bye");
}
greet("Tanya",SayBye);

// Higher order function
function calculator(a,b,callstack){
    return callstack(a,b);
}
function multiply(a,b){
    return a*b;
}
console.log(calculator(2,3,multiply));

//function currying
function multiply(a){
    return function(b){
        return a*b;
    }

}
let double=multiply(2);
console.log(double(3));

//function chaining
let person={
    name:"Tanya",
    greet(){
        console.log("Hello" ,this.name);
        return this;
    },
    SayBye(){
        console.log("Bye" ,this.name);
        return this;
    }

}
person.greet().SayBye();