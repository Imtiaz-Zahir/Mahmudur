import { Schema, model, models } from "mongoose";

const UiUxSchema = new Schema({
    image:{
        type:String,
        required:[true,'image required'],
        unique:[true,'image name must be unique']
    }
})

const Ui_Ux = models.Ui_Ux || model("Ui_Ux",UiUxSchema);

export default Ui_Ux;