const mongoose = require('mongoose')

const mongo_url = "mongodb://localhost:27017/backend_auth_learn"

mongoose.connect(mongo_url).then(()=>{
    console.log("Connected to Database");
}).catch(()=>{
    console.log("Failed to connect to database")
})