import { Request, Response } from "express";

export async function updateUser (req: Request, res: Response):Promise<any>{
    return res.json({
        success : true,
        route : "/update User Route"
    })
}