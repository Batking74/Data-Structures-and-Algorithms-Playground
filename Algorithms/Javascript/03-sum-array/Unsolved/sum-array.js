// Write code to add all the numbers in `arr` and return the total

// Time Complexity: O(n)
var sumArray = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
