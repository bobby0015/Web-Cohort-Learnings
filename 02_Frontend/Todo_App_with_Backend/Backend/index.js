const express = require('express')
const app = express()

//Global middlewares
app.use(express.json())

app.get('/', function(req,res){
    res.send('Hi, I am server');
})

const PORT = 3000

app.listen(PORT, function(){
    console.log("Server is running on: " + PORT)
})