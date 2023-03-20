require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    Sepolia :{
      url: 'https://eth-sepolia.g.alchemy.com/v2/x82wqlbYzmXq1JiTv6ycirhHbYQYJuLF',
      accounts:['1e81d39788fa4ed5500d70018518b53ec10afd72dc41d6cef0654bd602e793cb']    }

  }
}