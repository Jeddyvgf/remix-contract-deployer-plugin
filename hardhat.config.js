require('@nomiclabs/hardhat-waffle');

require('dotenv').config();

module.exports = {
  solidity: {
    version: "0.8.0", // Specify your Solidity version
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      gas: 2000000,
      gasPrice: 20000000000, // 20 gwei
    },
    mainnet: {
      url: process.env.MAINNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      gas: 2000000,
      gasPrice: 100000000000, // 100 gwei
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: ["0x..."], // replace with your local account address or use forking
    },
  },
};