const express = require("express");
const { allSubjects } = require("../mockData/allSubjects");

const router = express.Router();

router.get("/", async (_req, res) => {
    res.json(allSubjects);
});

module.exports = router;
