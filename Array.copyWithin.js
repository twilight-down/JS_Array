const arr1 = [1, 2, 3, 4, 5]
arr1.copyWithin(1, 0, 3) // [1,1,2,3,5]
console.log(arr1);


arr1.copyWithin(0, 1, 4) // [1,1,3,3,5]
console.log(arr1);