const user = require("../models/user")

const singup = (req,res) => {
    const {username,email,password} = req.body;
}

module.exports = {singup}