import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    // _id: Schema.Types.ObjectId(),
    name:{
        type:String,
        required:[true,'name required']
    },
    email:{
        type:String,
        required:[true,'email required'],
        unique:[true,'email must be unique']
    },
    image:{
        type:String
    }
})

const User = models.User || model("User",UserSchema);

export default User;