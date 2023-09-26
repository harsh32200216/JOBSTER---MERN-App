const express = require("express");
const router = express.Router();
const { allUsers, singleUser, editUser, deleteUser, createUserJobsHistory } = require("../controllers/userController.js");
const { isAuthenticated, isAdmin } = require("../middleware/auth.js");

router.get("/allUsers", isAuthenticated, isAdmin, allUsers);
router.get("/user/:id", isAuthenticated, singleUser);
router.put("/user/edit/:id", isAuthenticated, editUser);
router.put("/admin/user/delete/:id", isAuthenticated, isAdmin, deleteUser);
router.post("/user/jobhistory", isAuthenticated, createUserJobsHistory);

module.exports = router;