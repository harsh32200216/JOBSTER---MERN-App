const express = require("express");
const router = express.Router();
const { allJobsType, createJobType, updateJobType, deleteJobType } = require("../controllers/jobTypeController.js");
const { isAuthenticated, isAdmin } = require("../middleware/auth.js");

router.get("/type/jobs", allJobsType);
router.post("/type/create", isAuthenticated, isAdmin, createJobType);
router.put("/type/update/:type_id", isAuthenticated, isAdmin, updateJobType);
router.delete("/type/delete/:type_id", isAuthenticated, isAdmin, deleteJobType);

module.exports = router;