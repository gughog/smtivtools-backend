module.exports = (req, res, next) => {
  console.log(`>>> (i) ${req.method} ${req.originalUrl} was requested.`);
  next();
};