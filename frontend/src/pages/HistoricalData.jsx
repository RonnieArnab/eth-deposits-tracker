import React, { useEffect, useState } from "react";
import axios from "axios";
import HistoricalDepositRow from "../components/HistoricalDepositRow";

const HistoricalData = () => {
  const [historicalDeposits, setHistoricalDeposits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ws = new WebSocket(
      "ws://eth-deposits-tracker.onrender.com/historical"
    );
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setHistoricalDeposits((prevDeposits) => [data, ...prevDeposits]);
    };
    return () => ws.close();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Historical Ethereum Deposits
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Tx Hash
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Block Number
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                From
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                To
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Fee (ETH)
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Timestamp
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 px-6 py-4">
                  Loading...
                </td>
              </tr>
            ) : historicalDeposits.length > 0 ? (
              historicalDeposits.map((deposit, index) => (
                <HistoricalDepositRow key={index} transaction={deposit} />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 px-6 py-4">
                  No historical deposits found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoricalData;
