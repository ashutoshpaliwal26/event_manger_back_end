// Import Pacakge
import mongoose from "mongoose";

// Connect To Mongodb Database
async function ConnectTODB(dbString : string){
    try{
        const conn = await mongoose.connect(dbString as string, {
            dbName : 'Event_Manger'
        });
        console.log("DB is connected to : ", conn.connection.host)
    }catch(err){
        console.log("Connection Error : " , (err as Error).message);
    }
}

export default ConnectTODB;