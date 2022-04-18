const router = require("express").Router();


const Products = require("../models/Product");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const CryptoJS = require("crypto-js");
//const { json } = require("express");


// CREATE ..... METHODE DE CREATION DE PRODUIT

router.post("/", verifyTokenAndAdmin, async(req, res) => {
    const newProduct = new Products(req.body)

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
        console.log(savedProduct);
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }

})

// UPDATE  ::::::: mise à jour
// router.put("/:id", verifyTokenAndAuthorization, async(req, res) =>{

//     const id = req.user.id;
//     if(req.user.id === req.params.id || req.user.isAdmin){
//         req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
// }

//     try {
//         const updateUser = await User.findByIdAndUpdate(req.params.id, {
//             $set : req.body
//         }, {new: true});

//         res.status(200).json(updateUser)
//         console.log(updateUser);
//     } catch (err) {
//         res.status(500).json(err)
//         console.log(err);
//     }
// })

// DELETE :::: SUPPRIMER UN ELEMENT DANS L'API

// router.delete("/:id", verifyTokenAndAuthorization, async(req,res) => {
//     try {
//         await User.findByIdAndDelete(req.params.id);
//         res.status(200).json("Utilisateur supprimé . . .");
//     }catch(err){
//         res.status(500).json(err)
//     }
// })


// GET USER ... AVOIR L'UTILISATEUR

// router.get("/find/:id", verifyTokenAndAdmin, async(req,res) => {
//     try {
//         const user =  await User.findById(req.params.id);
//         const { password , ...others} = user._doc;

//         res.status(200).json(others)
//     }catch(err){
//         res.status(500).json(err)
//     }
// });


// GET ALL USER ... AVOIR TOUS LES UTILISATEURS

// router.get("/", verifyTokenAndAdmin, async(req,res) => {

//     RETOURNER UN NOMBRE PRECIS D'UTILISATEURS
//     const query = req.query.new

//     try {
//         const users = query ? await User.find().sort({_id: -1}).limit(2) : await User.find();
//         res.status(200).json(users)
//     }catch(err){
//         res.status(500).json(err)
//         console.log(err)
//     }
// })


// GET USERS STATS ::::: AVOIR LES STATISTIQUES DES UTILISATEURS
// router.get("/stats", verifyTokenAndAdmin, async(req,res) =>{
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() -1));


//     try {
//         const data = await User.aggregate([
//             { $match : { createdAt: { $gte: lastYear } } },
//             {
//               $project: {
//                   month: { $month: "$createdAt"},
//               },
//             },
//             {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum: 1 } 
//                 }
//             }
//         ])
//         res.status(200).json(data)
//     }catch(err){
//         res.status(500).json(err);
//     }
// })



module.exports = router