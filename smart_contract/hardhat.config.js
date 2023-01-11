/**
 * npx hardhat run scripts/deploy.js --network goerli
 * 部署地址：0x1474750D45D1e89fBa710Fab26FcF2b4F72bEfe8
 */

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      // url是在alchemy平台创建应用后的网络http地址
      url: 'https://eth-goerli.g.alchemy.com/v2/nNnvQWSOhSxGEzK4ubv18AT7fil55PBv',
      // accounts为MetaMask中，account details => Export private key的值
      accounts: ['5ecac5c2be0e1df84fb6f1639fddd87e4640cace3e9111724b53ea4a09d35ac3'],
    },
  },
};
