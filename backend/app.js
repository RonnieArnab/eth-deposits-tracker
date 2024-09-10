const express = require("express");
const cors = require("cors");
const ethRoutes = require("./routes/ethRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", ethRoutes);

module.exports = app;
