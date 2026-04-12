'use strict';

const { ethers } = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log('Deploying contracts with the account:', deployer.address);

    const Factory = await ethers.getContractFactory('Factory');

    const salt = ethers.utils.id(Math.random().toString());
    const contract = await Factory.deploy({ salt });

    console.log('Factory contract deployed!');
    console.log('Salt:', salt);
    console.log('Contract Address:', contract.address);
    console.log('Transaction Hash:', contract.deployTransaction.hash);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });