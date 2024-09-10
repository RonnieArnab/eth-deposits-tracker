import React, { useEffect, useState } from "react";
import DepositCard from "../components/DepositCard";

const Dashboard = () => {
  const [deposits, setDeposits] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setDeposits((prevDeposits) => [data, ...prevDeposits]);
    };
    return () => ws.close();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Live Ethereum Deposits</h1>
      <div className="space-y-4">
        {deposits.map((deposit, index) => (
          <DepositCard key={index} transaction={deposit} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
