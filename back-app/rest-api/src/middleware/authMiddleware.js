const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Use the same key as in authController

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'No token provided.' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized.' });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = authMiddleware;
