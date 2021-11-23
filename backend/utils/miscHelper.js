const findMissingParam = (obj) => {
  const parameter = Object.keys(obj).find((item) => !Boolean(obj[item]));
  return { missing: !!parameter, parameter };
};

module.exports = { findMissingParam };
