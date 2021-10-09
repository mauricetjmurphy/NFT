const SmartContract = artifacts.require("PixelPussy");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Name", "Symbol", "https://");
};
