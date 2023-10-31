// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    // O(n)
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};



const is = isPalindrome('racecar');

console.log(is)