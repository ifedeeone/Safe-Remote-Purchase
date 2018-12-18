const SafeRemotePurchase = artifacts.require("./SafeRemotePurchase.sol")

module.exports = function(deployer) {
	deployer.deploy(SafeRemotePurchase);
};