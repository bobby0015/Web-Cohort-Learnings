const singup = (req,res) => {
    const {username,email,password} = req.body;

    res.send({username,email,password})
}

module.exports = {singup}