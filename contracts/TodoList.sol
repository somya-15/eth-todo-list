pragma solidity ^0.5.0;

contract TodoList {
//we will keep a track of the number of items in the To-do list with the help of a special variable called state variable 
	uint public taskCount = 0; //state variables inside of solidity are actaully written to the blockchain. They represent the state of the blockchain and the state of the smart contract is going to change anytime this task count changes. These are a lot like class variables in an object oriented context where the scope of the variable belongs to the entire smart contract, not necessarily like a function or something. 
	//we can also create a way to read this value from the smart contract with keyword--> public. It provides some function for us that allows us to read the value task count from the to-do list and solidity gives us a function whenever we use this public keyword.

//and we will store this value inside the smart contract as a way to get started and ensure that everything is set up properly in our project

// we will deploy this simple smart contract to the blockchain and see if we can actually connect to it.

}