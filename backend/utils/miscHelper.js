const findMissingParam = (...params) => {
  const parameter = params.find((item) => !Boolean(item));
  return { missing: !!parameter, parameter };
};

module.exports = { findMissingParam };
