// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/qPx3JSzgFjD-WfhD1zajjoVSniTdr5Fi',
      accounts: ['84e135d1097a4bb19ec83b5f738045aa762b80808846aaf8faf1fd3bd4ec9e25']
    }
  }
};
