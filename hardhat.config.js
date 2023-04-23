require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "ganache",
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 5777 //Ganache Network ID
      //schainId: 1337
    },
    ganache: {
      url: "http://127.0.0.1:7545", //Ganache Hostname:Port Number
      //url: "http://127.0.0.1:8545",
      accounts: [
        `11a202f13b8593150bf94c07ca91df64a6128f959c7e6f61ced60c4011694969`, //Ganache Accounts Private Key
      ],
    }
  }
};