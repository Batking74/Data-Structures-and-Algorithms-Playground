// Write code to return the largest number in the given array

// Time Complexity: O(n)
var maxNum = function(arr) {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};
