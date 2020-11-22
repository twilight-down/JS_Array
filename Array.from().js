let a = Array.from('abc') //[ 'a', 'b', 'c' ]
const set = new Set(['a', 'b', 'c', 'd'])
let b = Array.from(set) //[ 'a', 'b', 'c', 'd' ]
const map = new Map([
    [1, 'a'],
    [2, 'b'],
    [3, 'c']
])
let mapArr = Array.from(map) // [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]
let val = Array.from(map.values()) // [ 'a', 'b', 'c' ]
let key = Array.from(map.keys()) // [ 1, 2, 3 ]

let c = Array.from([1, 2, 3, 4], x => x + x) //[ 2, 4, 6, 8 ]

console.log(c);
console.log(a);
console.log(b);

console.log(val);
console.log(key);
console.log(mapArr);

console.log(map.length);