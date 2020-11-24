let arr1 = ['a', 'b', 'c', 'd', 'e']
let iterator1 = arr1.keys()
console.log(iterator1.next());
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next()['value']);
console.log(iterator1.next()['done']);
console.log(iterator1.next().value);