const express = require("express");
const app = express()
const PORT = 3000;

app.get("/helath-checkup",(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidney = req.query.kidneyID;

    if(username != "Divyam" || password != "pass"){
        res.status(400).json({
            msg : "Something up with your inputs"
        })
    }

    if(kidney != 1 && kidney !=2) {
        res.status(400).json({
            msg : "Something up with your inputs"
        })
    }

    res.json({
        msg : "Your kidney is fine!"
    }) 
})

app.listen(PORT,()=>{
    console.log("My server is running on PORT : " + PORT)
})