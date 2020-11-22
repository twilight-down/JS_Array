let arr1 = {
    '0': 'a',
    '1': 'b',
    '2': 'c'
}
let arr2 = Array.from(arr1)
console.log(arr2);
arr1.length = 3
arr2 = Array.from(arr1)
console.log(arr2);

Array.from({ length: 3 }, _ => {
    console.log('我只输出三次');
})