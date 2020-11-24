let arr1 = [1, 2, 3, 4, 5]
let arr2 = arr1.slice(1, 4)
let arr3 = arr1.slice()
arr3[1] = 10
console.log(arr2);
console.log(arr3);
console.log(arr1);