let arr1 = [0, undefined, null]
console.log(arr1.lastIndexOf(undefined));
console.log(arr1.findIndex(x => x == null));
console.log(arr1.findIndex(x => x === null));
console.log(arr1.find(x => x === null));

let arr2 = [0, null, undefined]
console.log(arr2.find(x => x === undefined));
console.log(arr2.find(x => x == undefined));
console.log(arr2.find(x => x == null, -1));