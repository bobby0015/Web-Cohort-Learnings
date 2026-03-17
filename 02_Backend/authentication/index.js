const express = require("express");
const app = express()
const PORT = 8080;
require("./config/db")

app.get("/",(req,res)=>{
    res.send("Hey there !");
})

app.listen(PORT,()=>{
    console.log("My port is running on PORT: " + PORT)
})