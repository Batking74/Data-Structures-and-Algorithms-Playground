// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    let factorial = 1;
    for(let i = num; i > 0; i--) {
        factorial = factorial * i;
    }
    return factorial;
};

const num = factorial(3);

console.log(num);