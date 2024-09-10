# Ethereum Deposit Tracker

The **Ethereum Deposit Tracker** is a MERN stack application that monitors live Ethereum deposit transactions on the Ethereum blockchain. It allows users to view both live deposits and historical deposit data. The application leverages **WebSockets** for real-time deposit tracking, and **ethers.js** to interact with the Ethereum blockchain.

## Features

- **Live Deposit Monitoring:** Track live Ethereum deposits to a specific contract address using WebSockets.
- **Historical Deposits:** View historical Ethereum deposit data based on recent block transactions.
- **Telegram Alerts:** Sends Telegram alerts whenever a new deposit is detected.
- **Web Interface:** A user-friendly interface built with React and Tailwind CSS for viewing live and historical deposits.

## Tech Stack

### Backend:

- **Node.js** with **Express**
- **WebSockets** for real-time communication
- **ethers.js** for blockchain interaction
- **Winston** for logging
- **Telegram Bot API** for deposit alerts

### Frontend:

- **React.js** with **Tailwind CSS** for UI design
- **React Router** for navigation

### Database:

- **Ethereum blockchain** for transaction data (no centralized database needed)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/eth-deposit-tracker.git
   cd eth-deposit-tracker
   ```

2. Install the dependencies for both the backend and frontend:

   ```bash
   # Backend dependencies
   cd server
   npm install

   # Frontend dependencies
   cd ../client
   npm install
   ```

3. Create a `.env` file in the `server` folder and configure the following environment variables:

   ```bash
   PORT=5000
   ETH_RPC_URL=<YOUR_ETH_RPC_URL>
   TELEGRAM_API_KEY=<YOUR_TELEGRAM_BOT_API_KEY>
   TELEGRAM_CHAT_ID=<YOUR_TELEGRAM_CHAT_ID>
   BEACON_CONTRACT_ADDRESS=0xdAC17F958D2ee523a2206206994597C13D831ec7
   ```

4. Run the backend:

   ```bash
   cd server
   npm start
   ```

5. Run the frontend:

   ```bash
   cd client
   npm start
   ```

6. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

## Usage

- **Dashboard:** Displays live Ethereum deposits as they occur, with transaction details including the block number, fee, sender, receiver, and timestamp.
- **Historical Data:** Provides a table with historical deposits fetched from the Ethereum blockchain.

### Website

Access the live version of the Ethereum Deposit Tracker at: [https://your-deployment-url.com](https://your-deployment-url.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Pull requests are welcome! Please open an issue first to discuss changes or improvements.
