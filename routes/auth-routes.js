const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controllers");
const validate = require("../middelware/validate-middelware");
const {userSchema,loginSchema} = require("../validator/auth-validate")


router.route("/").get(authControllers.home)


router.route("/register").post(validate(userSchema),authControllers.register);

router.route("/login").post(validate(loginSchema),authControllers.login);

router.route("/user").get(authControllers.user);





module.exports = router