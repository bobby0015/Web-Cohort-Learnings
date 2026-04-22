const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express()

//Global middlewares
app.use(express.json())

app.post("/todo", function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)

    if(!parsePayload.success){
        return res.status(411).json({
            msg : 'Please enter the valid detials'
        })
    }

    // Put the data in mongoDB
})

app.get("/todos", function(req,res){
    
})

app.put("/completed", function(req,res){
    const updatePayload = req.body
    const parsePayload = updateTodo.safeParse(updatePayload)

    if(!parsePayload.success){
        return res.status(411).json({
            msg : "Inputs are not correct"
        })
    }

    // Put the status in mongoDB
})

const PORT = 3000

app.listen(PORT, function(){
    console.log("Server is running on: " + PORT)
})