import { Request, Response } from "express";

export async function deleteUser (req: Request, res: Response):Promise<any>{
    return res.json({
        success : true,
        route : "/Delete User Route"
    })
}