let arr1 = [1, 2, 3, 4, 5]
let arr2 = arr1.splice(1, 1, 'add1', 'add2', 9)
let arr3 = [1, 2, 3, 4, 5]
let arr4 = [6, 7, 8, 9, 10]
let arr5 = arr3.splice(1, 1, ...arr4)

console.log(arr1);
console.log(arr2);
console.log(arr3);