const mongoose = require("mongoose")

const studentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        gender:{
            type: String,
            required: true
        },
        grade: {
            type: Number,
            required: true
        },
        school: {
            type: String,
            required: true
        }
    },{
        timestamps: true
    }
)
const Student = mongoose.model("Student", studentSchema)

module.exports = Student