require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const generateToken = (username) => {
  const payload = {
    username,
    admin: false,
  };

  return jwt.sign(payload, SECRET, jwtConfig);
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, SECRET);
    return { payload };
  } catch (error) {
    return { error };
  }
};

module.exports = {
  generateToken,
  verifyToken,
};