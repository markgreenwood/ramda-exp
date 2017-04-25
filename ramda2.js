const R = require('ramda');

const filters = { a: 1, b: 2, c: 3 };

const asMatch = R.objOf('match');

const makeMatches = R.compose(R.map(R.compose(R.objOf('match'), R.fromPairs, R.of)), R.toPairs);

console.log(makeMatches(filters));
