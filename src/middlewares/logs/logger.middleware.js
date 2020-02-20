module.exports = (req, res, next) => {
  console.log(`>>> (i) ${req.method} ${req.originalUrl} was requested with query: ${JSON.stringify(req.query)}.`);
  next();
};
