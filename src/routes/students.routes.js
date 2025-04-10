const express = require("express");
const { idStudentsCareer038 } = require("../mockData/students038");
const {
  academicStatus038,
} = require("../mockData/academicStatusData/academicStatusPerStudent038");

const router = express.Router();

router.get("/carrera/:id", async (req, res) => {
  if (req.params.id === "38") {
    res.json(idStudentsCareer038);
  } else {
    res.json([]);
  }
});

router.post("/statusAcademico/masivo", async (req, res) => {
  if (
    !(
      req.query.includeStudentData &&
      req.query.includeStudentData.toLowerCase() === "false" &&
      req.query.includeFirstPeriod &&
      req.query.includeFirstPeriod.toLowerCase() === "true"
    )
  ) {
    res.status(400).json({
      message:
        "Debe invocarse con query params includeStudentData=false y includeFirstPeriod=true",
    });
  } else {
    const alumnos = req.body;
    res.json(
      academicStatus038.filter((dataDeUnAlumno) =>
        alumnos.includes(dataDeUnAlumno.alumno)
      )
    );
  }
});

module.exports = router;
