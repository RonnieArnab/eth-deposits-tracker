import React from "react";

const HistoricalDepositRow = ({ transaction }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <td className="px-6 py-4 text-gray-900 font-medium">
        {transaction.hash.slice(0, 10)}...
      </td>
      <td className="px-6 py-4">{transaction.blockNumber}</td>
      <td className="px-6 py-4">{transaction.from.slice(0, 10)}...</td>
      <td className="px-6 py-4">
        {transaction.to ? transaction.to.slice(0, 10) : "N/A"}...
      </td>
      <td className="px-6 py-4">{transaction.fee} ETH</td>
      <td className="px-6 py-4">
        {new Date(transaction.blockTimestamp * 1000).toLocaleString()}
      </td>
    </tr>
  );
};

export default HistoricalDepositRow;
