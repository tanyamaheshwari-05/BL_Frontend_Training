//Default parameter :-
function greet(name="Tanya" ,greeting="Hello"){
    console.log(`${greeting}, ${name}`)
}
greet();
greet("Alice");
greet(undefined,"Byee");
greet(null);
greet("","hello")