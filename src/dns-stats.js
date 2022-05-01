const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!Array.isArray(domains)) {
    return false;
  }
  let res = {};
  for (let i = 0; i < domains.length; i++) {
    let temp = domains[i].split(".").reverse();
    let domain = "";
    for (let j = 0; j < temp.length; j++) {
      domain += `.${temp[j]}`;
      res[domain] = (res[domain] || 0) + 1;
    }
  }
  return res;
}

module.exports = {
  getDNSStats,
};
