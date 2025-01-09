import { Request, Response } from "express";
import User from "../../models/Users";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"

export async function createUser (req: Request, res: Response):Promise<any>{
    const {name , phoneNo, password} = req.body;
    if(!name || !phoneNo || !password){
        return res.json({
            success : false,
            message : "Fill all the fields"
        })
    }
    
    try{
        const checkForUser = await User.findOne({name, phoneno : phoneNo});
        if(checkForUser){
            return res.json({
                success : false,
                message : "User Already Exist You Need to Log In"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name : name, 
            phoneno : phoneNo,
            passsword : hashPassword
        });

        const token = jwt.sign({
            name : newUser?.name,
            phoneNo : newUser.phoneno,
        }, process.env.SEC as string);

        return res.json({
            success : true,
            data : {
                name : newUser?.name,
                phoneNo : newUser.phoneno,
            },
            token : token,
            message : "Account Created Successfully"
        });
    }catch(err){
        return res.json({
            success : false,
            message : (err as Error).message
        })
    }
}