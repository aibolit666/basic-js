const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let repeatTimes = options.repeatTimes;
  let separator = options.separator || "+";
  let addition = options.addition || "";
  let additionSeparator = options.additionSeparator || "|";
  let additionRepeatTimes = options.additionRepeatTimes || 1;

  let str1 = str + (addition + additionSeparator).repeat(additionRepeatTimes);
  let res0 = str1.split(additionSeparator);
  res0.pop();
  let res1 = res0.join(additionSeparator);
  let str2 = (res1 + separator).repeat(repeatTimes);

  let res = str2.split(separator);
  res.pop();
  return res.join(separator);
}

module.exports = {
  repeater,
};
