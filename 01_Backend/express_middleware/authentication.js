const express = require('express')
const app = express()
const zod = require("zod")

// Basically the Zod is a library which can be used to validate our inputs.
const schema = zod.array(zod.number());

app.use(express.json())

app.post("/health-checkup", function (req,res) {
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys
    const response = schema.safeParse(kidneys)
    res.send({
        response
    })
})

app.listen(3001, () =>{
    console.log("Running on PORT : 3001")
})