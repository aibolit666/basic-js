const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrSort = [];
  let arrResult = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arrSort.push(arr[i]);
    }
  }
  arrSort.sort(function (a, b) {
    return a - b;
  });

  arr.forEach((i) =>
    i === -1 ? arrResult.push(i) : arrResult.push(arrSort.shift())
  );

  return arrResult;
}

module.exports = {
  sortByHeight,
};
