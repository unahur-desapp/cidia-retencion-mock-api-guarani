const express = require("express");
const {
  assistancePerClass,
  mainCourseData,
} = require("../mockData/courseData");

const router = express.Router();

router.get("/:id/asistenciaPorClase", async (req, res) => {
  res.json(assistancePerClass(Number(req.params.id)));
});

router.get("/:id", async (req, res) => {
  res.json(mainCourseData(Number(req.params.id)));
});

module.exports = router;
