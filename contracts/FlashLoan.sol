// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract FlashLoan {
    // State variable for smart contract owner
    address internal owner;

    constructor() {
        // Set contract owner the contract deployer
        owner = msg.sender;
    }

    // Function modifier as RBAC policy - ownly contract owner can perform action
    modifier onlyOwner() {
        require(msg.sender == owner, "only owner allowed");
        _;
    }

    // Function to retrieve contract owner (can be called only by contract owner)
    function getOwner() public view onlyOwner returns (address) {
        return owner;
    }
}
