const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        jwt.verify(token, process.env.JWT_SEC, (err, user) =>{
            if (err) res.status(403).json(" Jeton Invalide!!!");
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json("Vous n'etes pas connecté !!!")
    }
}