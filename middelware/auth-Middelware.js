// authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/auth-models');

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "unothorization token" })
    }

    const jwtToken = token.replace("Bearer", "").trim();

    try {
        const isveriFied = jwt.verify(jwtToken, process.env.secret_key);

        const userData = await User.findOne({ email: isveriFied.email }).select({ password: 0 });

      req.user = userData;
      req.token = token;
      req.userId = userData._id;

      next();

    } catch (error) {
        console.log("error user route", error);
    }
};

module.exports = authMiddleware;
