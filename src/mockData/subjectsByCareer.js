const { subjects001 } = require("./subjects001");
const { subjects002 } = require("./subjects002");
const { subjects005 } = require("./subjects005");
const { subjects005_085 } = require("./subjects005_085");
const { subjects007 } = require("./subjects007");
const { subjects007_083 } = require("./subjects007_083");
const { subjects012 } = require("./subjects012");
const { subjects013 } = require("./subjects013");
const { subjects016 } = require("./subjects016");
const { subjects021 } = require("./subjects021");
const { subjects031 } = require("./subjects031");
const { subjects032 } = require("./subjects032");
const { subjects034 } = require("./subjects034");
const { subjects038 } = require("./subjects038");
const { subjects051 } = require("./subjects051");
const { subjects051_097 } = require("./subjects051_097");

const subjectData = {
    1: subjects001,
    2: subjects002,
    5: subjects005,
    7: subjects007,
    12: subjects012,
    13: subjects013,
    16: subjects016,
    21: subjects021,
    31: subjects031,
    32: subjects032,
    34: subjects034,
    38: subjects038,
    51: subjects051,
    83: subjects007_083,
    85: subjects005_085,
    97: subjects051_097,
};

function subjectsByCareer(careerId) {
    return subjectData[careerId] || subjects038;
}

function subjectsByPlan(careerId, planId) {
    return ([83,85,97].includes(planId) ? subjectData[planId] : subjectData[careerId]) || subjects038;
}

module.exports = { subjectsByCareer, subjectsByPlan };
