let arr1 = [1, [2, [3, [4, [5]]]]]
let arr2 = arr1.flat(Infinity)
let arr3 = [1, 2, 3, 4, 5]
let arr4 = arr3.flatMap(x => [x * 2])
let arr5 = arr3.map(x => [x * 2])
console.log(arr2);
console.log(arr4);
console.log(arr5);

let arr6 = [, , , , , , , , 1, , , , , , ]
console.log(arr6.flat());
console.log(arr6.flatMap(x => x + 1));
console.log(arr6.map(x => x + 1));