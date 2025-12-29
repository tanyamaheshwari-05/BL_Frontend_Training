//Promise: 

let myPromise = new Promise((resolve,reject)=> {
    let success=true;
    if(success){
        resolve("Operation successfull");
    }
    else{
        reject("Operation failed");
    }

});
console.log(myPromise);