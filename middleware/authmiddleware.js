import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

export const authMiddleware = (req, res, next) => {

    try {
        const {authorization} = req.headers;
    
    if(!authorization) {
        return res.send(401)
    };

    const parts = authorization.split(" ")

    if(parts.length !== 2) {
        return res.sendStatus(401)
    };

    const [schema, token] = parts;

    if(schema !== "Bearer") {
        return res.sendStatus(401)
    };

    jwt.verify(token, process.env.SECRET_JWT, (error, decoded) => {
        if(error) {
            return res.send(401)
        }
        console.log(decoded)
        
    });

    next();

    } catch (err) {
        return res.sendStatus(501)
    }
    
};