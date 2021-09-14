import { NotImplementedError } from "../extensions/index.js";

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
export default function deleteDigit(n) {
  let numArray = n.toString().split("").map(Number);
  let min = Math.min.apply(null, numArray);
  let index = numArray.indexOf(min);
  numArray.splice(index, 1);
  return Number(numArray.join(""));
}
