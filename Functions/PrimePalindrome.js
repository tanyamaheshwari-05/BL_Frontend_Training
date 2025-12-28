let num = parseInt(process.argv[2]);
const isPrime= (num) =>{
    if(num<=1){
        return false;
    }
    else{
        for(let i=2;i*i<=num;i++){
            if(num% i === 0){
                return false;
                
        }
    }
    return true;
}

}
const reverse = (num) => {
    let rev = 0
    while (num > 0) {
        rev = rev * 10 + (num % 10)
        num = Math.floor(num / 10)
    }
    return rev
}
const checkPalindrome=(num)=>{
    if(!isPrime(num)){
        console.log(num,"is not a prime number");
        return
    }
    let pal=reverse(num);
    if(isPrime(pal)){
        console.log(num,"is prime and its palindrome", pal, "is also prime");
    }
    else
        console.log(num,"is prime but its palindrome", pal, "is not prime");
}
checkPalindrome(num);