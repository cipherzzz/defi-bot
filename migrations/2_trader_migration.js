
const TradingBot = artifacts.require("TradingBot");
module.exports = function(deployer) {

  if (process.env.NODE_ENV === "production") {
    require('dotenv').config({ path: '../src/.env.production' })
  } else {
    require('dotenv').config({ path: '../src/.env.development' })
  }
    
  let result = deployer.deploy(
      TradingBot, 
      process.env.DYDX_POOL_ADDRESS,
      process.env.WETH_ADDRESS,
      process.env.SAI_ADDRESS,
      process.env.USDC_ADDRESS,
      process.env.DAI_ADDRESS,
      process.env.ONE_SPLIT_ADDRESS,
      process.env.ZRX_EXCHANGE_ADDRESS,
      process.env.ZRX_ERC20_PROXY_ADDRESS,
      process.env.ZRX_STAKING_PROXY,
      { from: process.env.ADDRESS, value: "100000000000" }
  );
};
