const arr1 = ['a', 'b', 'c', 'd', 'e']
let iterator = arr1.entries()
console.log(iterator); //Object [Array Iterator] {}
console.log(iterator.next()); //{ value: [ 0, 'a' ], done: false }
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next()); //{ value: [ 0, 'a' ], done: false }