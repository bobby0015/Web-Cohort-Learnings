const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express()

//Global middlewares
app.use(express.json())

app.post("/todo", function (req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)

    if (!parsePayload.success) {
        return res.status(411).json({
            msg: 'Please enter the valid detials'
        })
    }

    const newTodo = await todo.create({
        title : createPayload.title,
        description : createPayload.description
    })

    return res.status(200).json({
        msg : 'todo created',
        newTodo
    })
})

app.get("/todos", function (req, res) {

})

app.put("/completed", function (req, res) {
    const updatePayload = req.body
    const parsePayload = updateTodo.safeParse(updatePayload)

    if (!parsePayload.success) {
        return res.status(411).json({
            msg: "Inputs are not correct"
        })
    }

    // Put the status in mongoDB
})

const PORT = 3000

app.listen(PORT, function () {
    console.log("Server is running on: " + PORT)
})