const express = require("express");
const app = express()
const {singup} = require("./controllers/user_auth")
const bodyParser = require("body-parser")
const PORT = 8080;
require("./config/db")

// global middlewares
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))

app.post("/singup",singup)

app.listen(PORT,()=>{
    console.log("My port is running on PORT: " + PORT)
})