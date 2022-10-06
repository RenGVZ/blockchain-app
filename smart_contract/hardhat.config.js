require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/WIQ8WX6YR6nt0L30E_cszsPzFwhOU953',
      accounts: [ '7c3eccb17c29d8a7be3de702d49704b5cfd84e6c079042adb4fca7e03b3f756d' ]
    }
  }
}