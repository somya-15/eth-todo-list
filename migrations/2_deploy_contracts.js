// to get smart contract onto the blockchain
// migration--> db state(structure/schema) change by adding new tables or adding columns to tables. When we deploy smart contract to the blockchain we are actually changing the state. It is basically just a big db. So when we put the smart contract on the blockchain we are updating the state and thereby we need a migration in order to do that.

const TodoList = artifacts.require("./TodoList.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};

//truffle creates an Artifact out of TodoList.json and that's going to be just an abstraction of the smart contract

