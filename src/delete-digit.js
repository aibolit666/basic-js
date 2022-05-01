const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  let numArray = n.toString().split("").map(Number);
  let min = Math.min(...numArray);
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] === min) {
      i++;
      min = -1;
    }
    arr.push(numArray[i]);
  }
  return Number(arr.join(""));
}

module.exports = {
  deleteDigit,
};
