// Write code to create a function that accepts a string and returns the string in camelCase

// Time Complexity: O(n)
const camelCase = function(str) {
    let camelCaseStr = '';

    for(let i = 0; i < str.length; i++) {
        let letter = str.charAt(i);
        if (i == 0) {
            camelCaseStr += letter.toLowerCase();
        }
        else if (letter === ' ') {
            camelCaseStr += str.charAt(i+1).toUpperCase();
            i++;
        }
        else {
            camelCaseStr += letter;
        }
    }
    return camelCaseStr;
};