const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/mytodoapp")

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    completed: {
        type: boolean,
        default : false
    },
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo
}