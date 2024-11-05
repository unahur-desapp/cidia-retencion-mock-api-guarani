const express = require("express");
const { allCareers } = require("../mockData/careers");
const { subjectsByCareer, subjectsByPlan } = require("../mockData/subjectsByCareer");
const { omit } = require("lodash");

const router = express.Router();

router.get("/", async (req, res) => {
    const includePlans = (req.query.incluirPlanes || '').toLowerCase() === 'si';
    res.json(includePlans ? allCareers : allCareers.map(careerData => omit(careerData, ["planes"])));
});

router.get("/:id/materias", async (req, res) => {
    res.json(subjectsByCareer(Number(req.params.id)));
});

router.get("/:idCareer/plan/:idPlan/materias", async (req, res) => {
    res.json(subjectsByPlan( Number(req.params.idCareer), Number(req.params.idPlan) ));
});

module.exports = router;
