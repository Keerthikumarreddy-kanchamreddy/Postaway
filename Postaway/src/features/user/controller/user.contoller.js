import { addUser,confirmLogin } from "../model/user.model.js";
import jwt from 'jsonwebtoken';

export const registerUser=(req, res, next)=>{
    const userData = req.body;
    if(userData){
        let user = addUser(userData);
        res.status(201).send({ status: "success", user });
    }else{
        res.status(400).json({ status: "failure", msg: "invalid user details" });
    }
}

export const loginUser = (req, res) => {

    let status = confirmLogin(req.body);
    if(!status){
        return res.status(400).send({status:"failure", msg: "Invalid credentials"});
    }else{
        const token = jwt.sign({
            userId:status.id,
            userName:status.userName
        },
        'Y8wA3eqJsbxhxzo1gpF',
        {
            expiresIn:'1h',
        }
    )
       return res.status(200).send(token);
    }
}