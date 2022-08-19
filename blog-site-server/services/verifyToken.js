const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

const {TOKEN_KEY} = process.env;

const verifyToken = (req, res, next) => {
    const token = req.params.token;

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = verifyToken;