const express = require("express");
const { allSubjects } = require("../mockData/allSubjects");
const { coursesByCareer } = require("../mockData/coursesBySubjectAndTerm");

const router = express.Router();

router.get("/", async (_req, res) => {
  res.json(allSubjects);
});

router.get("/:id/cursos/:idPeriodo", async (req, res) => {
  res.json(
    coursesByCareer(Number(req.params.id), Number(req.params.idPeriodo))
  );
});

module.exports = router;
