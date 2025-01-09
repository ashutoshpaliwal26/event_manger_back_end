import { Request, Response } from "express";
import User from "../../models/Users";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export async function loginUser(req: Request, res: Response): Promise<any> {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.json({
      success: false,
      message: "Fill all the fields",
    });
  }

  try {
    const checkUser = await User.findOne({
      name: name,
    }).select("-password");

    if(checkUser){
        const checkPass = await bcrypt.compare(password, checkUser.passsword);
        if(checkPass){
            const token = jwt.sign({
                name : checkUser.name,
                phoneNo : checkUser.phoneno
            }, process.env.SEC as string);
            return res.json({
                success : true,
                message : "Login Successfully",
                data : checkUser,
                token : token
            })
        }
        else{
            return res.json({
                success : false,
                message : "Incorrect Password"
            })
        }
    }
    else{
        return res.json({
            success : false,
            message : "User Not Found You Need Sign Up"
        })
    }
    
  } catch (err) {
    return res.json({
      success: false,
      message: (err as Error).message,
    });
  }
}
