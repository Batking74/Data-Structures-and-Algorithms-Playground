// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

// Time Complexity O(1), Space Complexity: O(1)
var oddOrEven = function(num) {
    if(num % 2 != 0) {
        return 'odd';
    }
    else {
        return 'even';
    }
};
