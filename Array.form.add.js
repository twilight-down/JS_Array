let arr1 = {
    '0': 'a',
    '1': 'b',
    '2': 'c'
}
arr1.length = 3
let arr2 = Array.from(arr1)
console.log(arr2);