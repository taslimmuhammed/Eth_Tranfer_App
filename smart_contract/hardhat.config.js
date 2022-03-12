require('@nomiclabs/hardhat-waffle')

module.exports= {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks:{
    ropsten:{
      url:"https://eth-ropsten.alchemyapi.io/v2/oDrEiz0NYKQd_qJV_6_2cRFF_QhDnGOs",
      accounts:['76921d1cb6d55c44a71942a3be07d009ea8a2fd432b624eabfc46f72ca0ca316']
    }
  }
  
}