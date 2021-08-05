const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");

// @desc get all students
// @route get /api/student
// @access Public
const getAllStudent = asyncHandler(async(req, res) => {
    const fetchedStudent = await Student.find();

    console.log("get student ", fetchedStudent)
    res.status(200).json(fetchedStudent)
})

// @desc get student
// @route get /api/student/studId
// @access Public

const getOneStudent = asyncHandler(async(req, res) => {
    const student = await Student.findById(req.params.studId)

    if(student){
        res.json(student)
    } else {
        res.status(404)
        throw new Error("I couldnt find the student")
    }
})

// @desc post student
// @route post /api/student
// @access Public

const addStudent = asyncHandler(async(req, res) => {
    const { name, gender, grade, school} = req.body
    const student = await Student.create({
        name, gender, grade, school
    })

    console.log("add student ", student)
    if(student) {
        res.status(201).json(student)
    }else {
        res.status(400)
        throw new Error("failed to create student")
    }
})

// @desc update student
// @route put /api/student/:studId
// @access Public

const updateStudent = asyncHandler(async(req, res) => {
    const student = await Student.findById(req.params.studId)

    if(student){
        student.name = req.body.name,
        student.gender = req.body.gender,
        student.grade = req.body.grade,
        student.school = req.body.school

        const updateStud = await student.save()
    res.json(updateStud)
    } else {
        res.status(404)
        throw new Error("Studnet not Found")
    }
})

// @desc Delete student
// @route delete /api/student/:studId
// @access Public

const deleteStudent = asyncHandler(async(req, res) => {
    
    const student = await Student.findById(req.params.studId)

    console.log(student)
    if(student) {
        await student.remove()
        res.json({message: "student has been removed"})
    } else {
        res.status(404)
        throw new Error("student not found")
    }

})

exports.getAllStudent = getAllStudent;
exports.getOneStudent = getOneStudent;
exports.addStudent = addStudent;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
