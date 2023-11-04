// Write code to create a function that accepts an array numbers
// Return `true` if no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    let i = 0;
    let j = 1;

    // The new algorithm I came up with O(n)
    while(i < arr.length) {
        if (arr[i] == arr[j]) {
            return false;
        }
        else if (j < arr.length) {
            j++;
            continue;
        }
        else {
            j = i + 1;
            j++;
        }
        i++;
    }
    return true;
};


// My original algorithm O(n^2)
// var isUnique = function(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] == arr[j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }