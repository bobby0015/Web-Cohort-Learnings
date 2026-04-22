const express = require('express')
const app = express()

//Global middlewares
app.use(express.json())

app.post("/todo", function(req,res){

})

app.get("/todos", function(req,res){
    
})

app.put("/completed", function(req,res){
    
})

const PORT = 3000

app.listen(PORT, function(){
    console.log("Server is running on: " + PORT)
})