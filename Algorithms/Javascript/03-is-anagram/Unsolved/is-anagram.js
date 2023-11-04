// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

// New Solution O(n)
const isAnagram = function(strA, strB) {
    if(strA.length == strB.length) {
        let i = 0;
        let j = 0;

        // Begin checking if all chars in strB are included in strA
        while (i < strA.length) {
            let letter1 = strA.charAt(i);
            let letter2 = strB.charAt(j);
            let isAtEndOfStringA = i == strA.length - 1;
            let isAtEndOfStringB = j == strA.length - 1;
            
            // checking if letter1 includes letter2
            if (letter1 === letter2) {
                
                // checking if both iterators (i and j) reached the end of the string length
                if(isAtEndOfStringA && isAtEndOfStringB) return false;

                // checking if j iterator reached the end of the string length
                if (isAtEndOfStringB) {
                    i++; // increment to the next char in strA
                    j = i; // reset j iterator
                    continue; // start the while loop over from the top
                }
                j++; // Keep Searching all chars in strB
            }
            if (letter1 != letter2) {
                if(isAtEndOfStringA && isAtEndOfStringB) return true;
                if (isAtEndOfStringB) {
                    i++;
                    j = i;
                    continue;
                }
                j++;
            }
        }
    }
    return false; // if strA and strB are not the same length return false
}

// Original Solutution O(n^2)
// const isAnagram = function(strA, strB) {
//     if(strA.length == strB.length) {
//         let i = 0;

//         while (i < strA.length) {
//             let letter = strB.charAt(i);
//             if(strA.includes(letter)) {
//                 i++;
//                 continue;
//             }
//             else {
//                 return false;
//             }
//         }
//         return true
//     }
//     return false;
// }