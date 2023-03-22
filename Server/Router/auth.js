const express = require("express");

const router = express.Router();

const authController = require("../Controllers/auth");


router.post("/register",authController.register);
router.post("/login",authController.login);
router.post("/forgetpassword",authController.forgetpassword);
router.post("/resetpassword",authController.resetpassword);

module.exports = router;



