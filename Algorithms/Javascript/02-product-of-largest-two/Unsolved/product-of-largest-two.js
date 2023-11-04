// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

// Time Complexity: O(n), Space Complexity: O(n)
var productOfLargestTwo = function(arr) {
    const max = [arr[0], arr[0]];
    let index = 0;
    let prevMax = 0;

    for(let i = 0; i <= arr.length; i++) {
        
        // If i has reached the end of the array reset i and search for the next max in 'max' array.
        if(i == arr.length) {
            if(index == max.length - 1) break;
            arr[prevMax] = undefined;
            index++;
            i = 0;
        }

        // Finding the max numbers in the arr
        if(arr[i] > max[index]) {
            max[index] = arr[i];
            prevMax = i;
        }
    }
    return max[0] * max[1];
};