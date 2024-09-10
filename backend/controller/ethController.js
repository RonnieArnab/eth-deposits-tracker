const { ethers } = require("ethers");
const { BEACON_CONTRACT_ADDRESS, ETH_RPC_URL } = require("../config/config");
const provider = new ethers.JsonRpcProvider(ETH_RPC_URL);
const { decodePubkey } = require("../services/ethTracker");
const { sendTelegramMessage } = require("../services/telegram");
const { logger } = require("../utils/logger");

const getHistoricalDeposits = async (req, res) => {
  try {
    const latestBlock = await provider.getBlockNumber();
    const filter = {
      address: BEACON_CONTRACT_ADDRESS,
      fromBlock: latestBlock - 100,
      toBlock: "latest",
    };

    const logs = await provider.getLogs(filter);
    const transactions = await Promise.all(
      logs.map(async (log) => {
        try {
          const transaction = await provider.getTransaction(
            log.transactionHash
          );
          const block = await provider.getBlock(log.blockNumber);
          const receipt = await provider.getTransactionReceipt(
            log.transactionHash
          );

          const gasUsed = BigInt(receipt.gasUsed);
          const gasPrice = transaction.gasPrice
            ? transaction.gasPrice
            : BigInt(0);
          const fee = gasUsed * gasPrice;

          const pubkey = decodePubkey(log.data);

          return {
            blockNumber: log.blockNumber,
            blockTimestamp: block.timestamp,
            fee: ethers.formatUnits(fee, "ether"),
            hash: log.transactionHash,
            pubkey: pubkey,
            from: transaction.from,
            to: transaction.to,
          };
        } catch (error) {
          console.error(`Error processing log ${log.transactionHash}:`, error);
          return null;
        }
      })
    );

    const validTransactions = transactions.filter((tx) => tx !== null);
    res.json(validTransactions);
  } catch (error) {
    console.error("Error fetching historical deposits:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const trackLiveDeposits = (ws) => {
  const filter = { address: BEACON_CONTRACT_ADDRESS };

  provider.on(filter, async (log) => {
    try {
      const transaction = await provider.getTransaction(log.transactionHash);
      const block = await provider.getBlock(log.blockNumber);
      const receipt = await provider.getTransactionReceipt(log.transactionHash);

      const gasUsed = BigInt(receipt.gasUsed);
      const gasPrice = transaction.gasPrice ? transaction.gasPrice : BigInt(0);
      const fee = gasUsed * gasPrice;

      const pubkey = decodePubkey(log.data);
      const depositData = {
        blockNumber: log.blockNumber,
        blockTimestamp: block.timestamp,
        fee: ethers.formatUnits(fee, "ether"),
        hash: log.transactionHash,
        pubkey,
        from: transaction.from,
        to: transaction.to,
      };

      if (ws && ws.readyState === ws.OPEN) {
        ws.send(JSON.stringify(depositData));
      }
      logger.info(depositData);
      sendTelegramMessage(depositData);
    } catch (error) {
      logger.info(`Error processing log: ${error}`);
      console.error("Error processing log:", error);
    }
  });
};

module.exports = { getHistoricalDeposits, trackLiveDeposits };
