const http = require("http");
const WebSocket = require("ws");
const app = require("./app");
const { trackLiveDeposits } = require("./controller/ethController");
const { PORT } = require("./config/config");

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");
  trackLiveDeposits(ws);

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
