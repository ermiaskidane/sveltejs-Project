const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController")

router.get("/", studentController.getAllStudent)
router.get("/:studId", studentController.getOneStudent)
router.post("/", studentController.addStudent)
router.put("/:studId", studentController.updateStudent)
router.delete("/:studId", studentController.deleteStudent)

module.exports = router
