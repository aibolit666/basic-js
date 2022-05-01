const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chains: [],

  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(value);
    return this;
  },
  removeLink(position) {
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.chains = this.chains.reverse();
    return this;
  },
  finishChain() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
};

module.exports = {
  chainMaker,
};
