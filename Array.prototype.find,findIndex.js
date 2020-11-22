let arr1 = [1, 2, 3, 4, 5];

function ismoretree(val) {
    return val > 3
}
console.log(arr1.find(ismoretree));
console.log(arr1.findIndex(ismoretree));