const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arrN = [];
  let arrCheck = [];
  if (n.length !== 17) {
    return false;
  }

  arrN = n.split("-");

  arrN.forEach((i) => {
    let pairs = i.split("");

    if (pairs.length != 2) {
      return false;
    }
    for (let k = 0; k < pairs.length; k++) {
      if (
        !(pairs[k].charCodeAt() >= 48 && pairs[k].charCodeAt() <= 57) &&
        !(pairs[k].charCodeAt() >= 65 && pairs[k].charCodeAt() <= 70)
      ) {
        arrCheck.push("false");
      } else {
        arrCheck.push("true");
      }
    }
  });

  for (let l = 0; l < arrCheck.length; l++) {
    if (arrCheck[l] === "false") {
      return false;
    } else {
      return true;
    }
  }
}
module.exports = {
  isMAC48Address,
};
