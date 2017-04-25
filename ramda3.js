/* eslint-disable no-console */
const R = require('ramda');

const getOr = require('lodash/fp/getOr');

const getOrEmptyArray = getOr([]);

const getOrEmptyObject = getOr({});
const getOrNull = getOr(null);
const getOrZero = getOr(0);
const objOfProperty = (key, property) => R.pipe(getOrNull(property), R.objOf(key));

const resultsIntoArray = R.converge(Array);

const formatHit = R.pipe(
  resultsIntoArray([getOrEmptyObject('_source'), objOfProperty('id', '_id')]),
  R.mergeAll
);

const obj = { _source: { a: 1, b: 2, c: 3 }, _id: 3 };

console.log(formatHit(obj));
