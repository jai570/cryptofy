require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/frwUXS8WNfVW2hHHeU_JzRc0Mfwsdqm_",
      accounts: [
        "01e77a33151eb432096d3e5adde4e8d1d32144f1d39f3b831b2f1922c6be4817",
      ],
    },
  },
};
