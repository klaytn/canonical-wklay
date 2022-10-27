const { argv } = require("yargs");
const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");

require("dotenv").config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    baobab: {
      provider: () => {
        return new HDWalletProvider(
          process.env.TESTNET_PRIVATE_KEY,
          "https://klaytn-baobab-rpc.allthatnode.com:8551"
        );
      },
      network_id: "1001", // eslint-disable-line camelcase
      gas: 7500000,
      gasPrice: null
    },
    cypress: {
      provider: () => {
        return new HDWalletProvider(
          process.env.MAINNET_PRIVATE_KEY,
          "https://klaytn-mainnet-rpc.allthatnode.com:8551"
        );
      },
      network_id: "8217", // eslint-disable-line camelcase
      gas: 7500000,
      gasPrice: null
    }
  },
  compilers: {
    solc: {
      version: argv.solcVersion
    }
  }
};
