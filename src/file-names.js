const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const n = names;
  let count = 0;
  for (let j = 0; j < n.length; j++) {
    for (let i = 0; i < j; i++) {
      if (n[i] === n[i + j]) {
        count++;
        if (n[i].slice(-1) === ")") {
          count--;
        } else {
          n[i + j] = n[i + j].concat(`(${count})`);
          count++;
        }
        if (n[i].slice(-1) === ")") {
          count--;
          n[i + j] = n[i + j].concat(`(${count})`);
        }
      }
    }
  }
  return n;
}

module.exports = {
  renameFiles,
};
