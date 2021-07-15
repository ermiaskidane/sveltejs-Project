const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors");
const connectDB = require("./config/db")
const studentRoutes = require("./routes/studentRoutes")

dotenv.config()

connectDB()

const app = express()

// registering cors
app.use(cors())

app.use(express.json())

// app.get("/", (req, res) => {
//     res.send("API is running")
// })

app.use("/api/student", studentRoutes)

// Custom Error Handler for Routes
app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})

// Custom Error handler
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    })
})

const PORT = process.env.PORT || 5003
app.listen(PORT, console.log(`Server running in ${PORT}`))