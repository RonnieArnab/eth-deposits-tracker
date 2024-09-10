const axios = require("axios");
const { TELEGRAM_API_KEY, TELEGRAM_CHAT_ID } = require("../config/config");

const sendTelegramMessage = async (deposit) => {
  try {
    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_API_KEY}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text: `New ETH Deposit Detected:\nBlock: ${deposit.blockNumber}\nTransaction Hash: ${deposit.hash}\nTimestamp: ${deposit.blockTimestamp}`,
      }
    );
    console.log("Telegram message sent");
  } catch (error) {
    console.error("Error sending Telegram message:", error);
  }
};

module.exports = { sendTelegramMessage };
