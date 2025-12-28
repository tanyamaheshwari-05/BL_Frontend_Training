let num=parseInt(process.argv[2]);
const reverse=(num)=>{
    let rev=0;
    while(num>0){
    rev =rev*10+ num % 10;
    num=Math.floor(num/10);
    }
    return rev;
} 
const isPalindrome=(num)=>{
    let numberreversed =reverse(num);
    return num === numberreversed;
}
console.log(num,isPalindrome(num)?"is Palindrome":"is not Palindrome");