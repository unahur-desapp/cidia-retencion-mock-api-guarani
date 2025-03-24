const { courses549term65 } = require("./courses549_65");
const { courses580term58 } = require("./courses580_58");

function coursesByCareer(careerId, termId) {
  if (careerId === 580 && termId === 58) {
    return courses580term58;
  } else if (careerId === 549 && termId === 65) {
    return courses549term65;
  }
  return [];
}

module.exports = { coursesByCareer };
