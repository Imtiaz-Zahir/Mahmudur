import { Schema, model, models } from "mongoose";

const other = new Schema({
    catagory:{
        type:String,
        unique:[true,'catagory must be unique'],
        required:[true,'catagory required']
    },
    images:{
        type:Array,
        required:[true,'catagory required']
    }
},{timestamps:true});

const OtherDesign = models.OtherDesign || model("OtherDesign",other);

export default OtherDesign;