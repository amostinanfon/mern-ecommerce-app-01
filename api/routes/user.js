const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();
const CryptoJS = require("crypto-js");
const { json } = require("express");



// mise à jour 
router.put("/:id", verifyTokenAndAuthorization, async(req, res) =>{

    //const id = req.user.id;
    if(req.user.id === req.params.id || req.user.isAdmin){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
}

    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set : req.body
        }, {new: true});

        res.status(200).json(updateUser)
        //console.log(updateUser);
    } catch (err) {
        res.status(500).json(err)
        console.log(err);
    }
})

//DELETE :::: SUPPRIMER UN ELEMENT DANS L'API

router.delete("/:id", verifyTokenAndAuthorization, async(req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Utilisateur supprimé . . .");
    }catch(err){
        res.status(500).json(err)
    }
})


// GET USER ... AVOIR L'UTILISATEUR

router.get("/find/:id", verifyTokenAndAdmin, async(req,res) => {
    try {
        const user =  await User.findById(req.params.id);
        const { password , ...others} = user._doc;

        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
});


// GET ALL USER ... AVOIR TOUS LES UTILISATEURS

router.get("/", verifyTokenAndAdmin, async(req,res) => {
    try {
        const users =  await User.find();
        res.status(200).json(users)
    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})


























module.exports = router