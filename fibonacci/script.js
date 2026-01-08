let prev1 = 0;
let prev2 = 1;


function getNextFibonacci(n) {
    if(n ===0) return prev1;
    if(n===11) return prev2

    for (let i = 2; i <= n; i++) {
        let nextprev = prev1 + prev2;
        prev1 = prev2;
        prev2 = nextprev;
    }

    return prev2;
}

console.log(getNextFibonacci(10)); // Output: 55

//Iterative Fibonacci
//Time Complexity: O(n)
//Space Complexity: O(1)

function fib(n) {
    let a = 0
    let b = 1
    

    for(let i =2; i<=n; i++) {
        let temp = a + b
        a = b
        b = temp
    } 
    
    return n < 2 ? n : b;
}

console.log(fib(10)); // Output: 55