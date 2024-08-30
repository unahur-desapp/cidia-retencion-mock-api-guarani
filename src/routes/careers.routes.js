const express = require("express");
const { allCareers } = require("../mockData/careers");
const { subjectsByCareer } = require("../mockData/subjectsByCareer");

const router = express.Router();

router.get("/", async (_req, res) => {
    res.json(allCareers);
});

router.get("/:id/materias", async (req, res) => {
    res.json(subjectsByCareer(Number(req.params.id)));
});

module.exports = router;
