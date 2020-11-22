let arr1 = [1, 2, 3, 4, 5]
arr1.forEach(function(item, index, input) {
    input[index] = item * 10
})
console.log(arr1);
let arr2 = arr1.map(item => item * 10)
let arr3 = arr1.forEach(item => item * 10)
console.log(arr2);
console.log(arr3);
console.log(arr1);