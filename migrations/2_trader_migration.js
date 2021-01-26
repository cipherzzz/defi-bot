
require('dotenv').config({ path: '../src/.env' })
const TradingBot = artifacts.require("TradingBot");
module.exports = function(deployer) {
  let result = deployer.deploy(TradingBot, { from: process.env.ADDRESS, value: "1000000000000000000" });
  console.log(result);
};
