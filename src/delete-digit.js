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
  let max = Math.max(...numArray);
  if (numArray.length === 2) {
    arr.push(numArray[0]);
    return Number(arr);
  }
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] < max) {
      if (numArray[i] < numArray[i + 1]) {
        i++;
      }
      max = -1;
    } else if (numArray[i] === min) {
      if (numArray[i] < numArray[i + 1]) {
        i++;
      }
      min = -1;
    }
    arr.push(numArray[i]);
  }
  return Number(arr.join(""));
}

module.exports = {
  deleteDigit,
};
