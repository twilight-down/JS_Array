let arr1 = [1, 2, 3, 4, 5]

function testArr(arr) {
    return arr > 5
}
console.log(arr1.some(arr => arr > 4));
console.log(arr1.some(testArr));