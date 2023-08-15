const jwt = require('jsonwebtoken');

function authorize(role) {
  return (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const decodedToken = jwt.verify(token, 'GfddFFf22');
      if (decodedToken.role !== role) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      req.user = decodedToken;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
}

module.exports = authorize;
