const { course14781Data } = require("./courseClassesData/course14781");
const { course14783Data } = require("./courseClassesData/course14783");
const { course14785Data } = require("./courseClassesData/course14785");
const { course14815Data } = require("./courseClassesData/course14815");
const { course14836Data } = require("./courseClassesData/course14836");
const { course14837Data } = require("./courseClassesData/course14837");
const { course14838Data } = require("./courseClassesData/course14838");
const { course14839Data } = require("./courseClassesData/course14839");
const { course14840Data } = require("./courseClassesData/course14840");
const { course14841Data } = require("./courseClassesData/course14841");
const { course14842Data } = require("./courseClassesData/course14842");
const { course14843Data } = require("./courseClassesData/course14843");
const { course14846Data } = require("./courseClassesData/course14846");
const { course14848Data } = require("./courseClassesData/course14848");
const { course15651Data } = require("./courseClassesData/course15651");
const { course15652Data } = require("./courseClassesData/course15652");
const { course16464Data } = require("./courseClassesData/course16464");
const { course17047Data } = require("./courseClassesData/course17047");

const courseData = {
  14781: course14781Data,
  14783: course14783Data,
  14785: course14785Data,
  14815: course14815Data,
  14836: course14836Data,
  14837: course14837Data,
  14838: course14838Data,
  14839: course14839Data,
  14840: course14840Data,
  14841: course14841Data,
  14842: course14842Data,
  14843: course14843Data,
  14846: course14846Data,
  14848: course14848Data,
  15651: course15651Data,
  15652: course15652Data,
  16464: course16464Data,
  17047: course17047Data,
};

function assistancePerClass(courseId) {
  return courseData[courseId]?.assistance || [];
}

function mainCourseData(courseId) {
  return courseData[courseId]?.mainData || {};
}

module.exports = { assistancePerClass, mainCourseData };
