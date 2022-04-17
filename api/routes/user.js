const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

const router = require("express").Router();



// mise à jour 
router.put("/:id", verifyTokenAndAuthorization, async(req, res) =>{

    //const id = req.user.id;
    if(req.user.id === req.params.id || req.user.isAdmin){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
}

    try {
        const updateUser = await User.findByIdAndUpdate(user.params._id, {
            $set : req.body
        }, {new: true});

        res.status(200).json(updateUser)
    } catch (err) {
        res.status(500).json(err)
    }
})






module.exports = router