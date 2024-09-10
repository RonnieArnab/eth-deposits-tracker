const express = require("express");
const { getHistoricalDeposits } = require("../controller/ethController");
const router = express.Router();

router.get("/historical", getHistoricalDeposits);

module.exports = router;
