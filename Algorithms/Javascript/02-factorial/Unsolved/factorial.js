// Write code to create a function that returns the factorial of `num`

// Time Complexity: O(n)
var factorial = function(num) {
    let factorial = 1;
    for(let i = num; i > 0; i--) {
        factorial = factorial * i;
    }
    return factorial;
};

const num = factorial(3);

console.log(`${num} Permutations`);
// Output 6 Permutations