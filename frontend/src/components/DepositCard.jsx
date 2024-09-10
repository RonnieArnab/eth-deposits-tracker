import React from "react";

const DepositCard = ({ transaction }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-2">Transaction {transaction.hash}</h2>
      <p>
        <strong>Block Number:</strong> {transaction.blockNumber}
      </p>
      <p>
        <strong>From:</strong> {transaction.from}
      </p>
      <p>
        <strong>To:</strong> {transaction.to}
      </p>
      <p>
        <strong>Fee:</strong> {transaction.fee} ETH
      </p>
      <p>
        <strong>Timestamp:</strong>{" "}
        {new Date(transaction.blockTimestamp * 1000).toLocaleString()}
      </p>
    </div>
  );
};

export default DepositCard;
