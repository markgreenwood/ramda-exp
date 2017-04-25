const R = require('ramda');

const obj = { a: 1, b: 2, c: 3 };

const first = R.toPairs(obj);
// const result = R.transpose(first);
const lists = R.transpose(R.toPairs(obj));
const result = R.zipWith(R.objOf)(lists[0], lists[1]);

// const result = R.map(R.objOf('match'), R.zipWith(R.objOf, R.keys(obj), R.values(obj)));

// const keyValuePairs = R.ap([R.keys, R.values]);
// console.log('First, ', keyValuePairs);
//
// const listOfKeyValuePairs = R.zipWith(R.objOf);
// const result = listOfKeyValuePairs(keyValuePairs(obj));
console.log(result);
