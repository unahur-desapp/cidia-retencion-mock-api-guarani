const express = require("express");
const { allCareers } = require("../mockData/careers");

const router = express.Router();

router.get("/", async (_req, res) => {
    res.json(allCareers);
});

module.exports = router;
