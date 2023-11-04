// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

// Time Complexity: O(n)
var titleCase = function(str) {
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i);
        if (i == 0) {
            letter = letter.toUpperCase();
        }
        else if (letter === ' ') {
            // Original Solution: letter = (str.substring(i, i + 2)).toUpperCase();

            // New Solution that takes a little less time
            letter = ` ${(str.charAt(i+1)).toUpperCase()}`;

            i++;
        }
        newString += letter;
    }
    return newString;
};

const string = titleCase('nazir king one');

console.log(string);