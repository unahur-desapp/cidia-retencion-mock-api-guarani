const express = require("express");
const { periodosLectivos } = require("../mockData/periodosLectivos");

const router = express.Router();

router.get("/", async (_req, res) => {
  res.json(periodosLectivos);
});

module.exports = router;
