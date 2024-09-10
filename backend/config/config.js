require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,
  ETH_RPC_URL: process.env.ETH_RPC_URL,
  TELEGRAM_API_KEY: process.env.TELEGRAM_API_KEY,
  TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  BEACON_CONTRACT_ADDRESS: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  // USDT contract, change if needed
};
// 0xdAC17F958D2ee523a2206206994597C13D831ec7
