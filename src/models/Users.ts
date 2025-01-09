import mongoose, { Schema } from "mongoose";

interface IUser {
    name : string,
    phoneno : number,
    passsword : string,
}

const UserScheam = new Schema<IUser>({
    name : {
        type : String,
        trim : true,
        required : true
    },
    phoneno : {
        type : Number,
        required : true
    },
    passsword : {
        type : String,
        required : true
    }
},{
    timestamps : true
})

const User = mongoose.model("User", UserScheam);
export default User;