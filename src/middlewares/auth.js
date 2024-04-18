const jwt = require('jsonwebtoken')

exports.generateAuthToken = (userId) => {
    const jwt_data = jwt.sign({ userId }, 'JWT_SECRET', { expiresIn: '1h' });
    return jwt_data;
}

exports.verifyAuthToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Access Denied' })
    }

    try {
        const verified = jwt.verify(token, 'JWT_SECRET');
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Invalid Token' })
    }
}