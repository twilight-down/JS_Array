const isvalmoretree = val => val > 2
let arr1 = [3, 4, 5]
let arr2 = [1, 2, 3, 4]
let arr3 = [, , , , , , ]
console.log(arr1.every(isvalmoretree));
console.log(arr2.every(isvalmoretree));
console.log(arr3.every(isvalmoretree));