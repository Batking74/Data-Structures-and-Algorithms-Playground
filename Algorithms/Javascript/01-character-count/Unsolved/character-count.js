// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

/*
First solution Time Complexity: O(n) Didn't want to use nested for loop built in methods that would cause a time complexity of O(n^2) or worse.
*/
var characterCount = function(str) {
    let i = 0;
    let j = 1;
    let charCount = 0;
    let object = {};
    let iteration = 1;
    
    while (i < str.length) {
        let char1 = str.charAt(i);
        let char2 = str.charAt(j);

        if (char1 === char2) charCount++;
        if (iteration == 1) {
            charCount++;
            iteration++;
        }
        if (j == str.length) {
            if (object[char1] === undefined) object[char1] = charCount;
            i++;
            j = i + 1;
            iteration--;
            charCount = 0;
            continue;
        }
        j++;
    }
    return object;
}