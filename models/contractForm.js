import { Schema, model, models } from "mongoose";

const contract = new Schema({
    name:{
        type:String,
        required:[true,'name required'],
    },
    email:{
        type:String,
        required:[true,'email required'],
    },
    subject:{
        type:String,
        required:[true,'subject required'],
    },
    message:{
        type:String,
        required:[true,'message required'],
    }
},{ timestamps: true })

const Contract = models.Contract || model("Contract",contract);

export default Contract;