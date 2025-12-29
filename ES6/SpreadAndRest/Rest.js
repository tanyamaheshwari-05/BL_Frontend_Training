//Rest :-

//function parameter:
function fun(name,...address){
    console.log(`Name: ${name}`);
    console.log(`Address:${address}`);

    }
fun('John',30,'Developer','India')

//Array destructing
const { street, ...add } = { street: 'Main St', city: 'Anytown', zip: '12345' };
console.log(street);  
console.log(add)