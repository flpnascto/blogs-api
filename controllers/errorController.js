const CODE = require('../helper/statusCode');

module.exports = (err, _req, res, _next) => {
  console.error(`Error Controller: ${err.message}`);

  const statusCode = err.statusCode ? err.statusCode : CODE.INTERNAL_SERVER_ERROR;

  return res.status(statusCode).json({ message: err.message });
};