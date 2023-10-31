// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        let letter = str.substring(i, i + 1);
        if (i == 0) {
            letter = letter.toUpperCase();
        }
        else if (letter === ' ') {
            letter = (str.substring(i, i + 2)).toUpperCase();
            i++;
        }
        newString += letter;
    }
    return newString;
};

const string = titleCase('nazir king one');

console.log(string);