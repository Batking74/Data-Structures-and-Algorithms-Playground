let array = new Array(1000);

for(let i = 0; i < array.length; i++) {
    array[i] = i;
}
// console.log(array)

console.log(binarySearch(array, 200));


function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
    while(start <= end) {
        let middlePosition = Math.floor((start + end) / 2);
        let middleNumber = array[middlePosition]
        if(middleNumber == target) return middleNumber - 1;
        if(target < middleNumber) end = middlePosition - 1;
        else start = middlePosition + 1;
    } return -1;
}