//Spread :- 

//Merging arrays:
const arr1=[1,2,3];
const arr2=[4,5,6];
const combined=[...arr1, ...arr2];
console.log(combined);

//Copying arrays:
const arr=[1,2,3];
const copy=[...arr];
console.log(copy);

//Passing Arg to function:
function sum(a,b){
  return a+b;
}
const numbers=[1,2];
console.log(sum(...numbers))