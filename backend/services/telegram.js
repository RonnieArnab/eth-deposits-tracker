const axios = require("axios");
const { TELEGRAM_API_KEY, TELEGRAM_CHAT_ID } = require("../config/config");
const { logger } = require("../utils/logger");

const sendTelegramMessage = async (deposit) => {
  try {
    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_API_KEY}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text: `New ETH Deposit Detected:\nBlock: ${deposit.blockNumber}\nTransaction Hash: ${deposit.hash}\nTimestamp: ${deposit.blockTimestamp}`,
      }
    );
    logger.info(`Telegram alert sent: ${deposit}`);
  } catch (error) {
    logger.error(`Failed to send Telegram alert: ${deposit.message}`);
  }
};

module.exports = { sendTelegramMessage };
