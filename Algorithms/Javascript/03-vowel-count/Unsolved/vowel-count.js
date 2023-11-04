// Write code to return the the number of vowels in `str`
// vowels: 'a', 'e', 'i', 'o', and 'u'

// Time Complexity: O(n)
var vowelCount = function(str) {
    let numOfVowels = 0;
    for(let i = 0; i < str.length; i++) {
        const letter = str.charAt(i);
        if(letter === 'A' || letter === 'a') numOfVowels++;
        else if(letter === 'E' || letter === 'e') numOfVowels++;
        else if(letter === 'I' || letter === 'i') numOfVowels++;
        else if(letter === 'O' || letter === 'o') numOfVowels++;
        else if(letter === 'U' || letter === 'u') numOfVowels++;
    }
    return numOfVowels;
};
