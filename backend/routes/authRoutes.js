const express = require("express");
const router = express.Router();
const { signin, signup, logout, userProfile } = require("../controllers/authController.js");
const { isAuthenticated } = require("../middleware/auth.js");

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/logout", logout);
router.get("/user", isAuthenticated, userProfile);

module.exports = router;