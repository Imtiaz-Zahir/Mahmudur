import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema({
    user_ID:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true,'User-ID required'],
    },
    post_ID:{
        type:Schema.Types.ObjectId,
        ref:'Ui_Ux',
        required:[true,'email required'],
    },
    comment:{
        type:String,
        required:[true,'comment required'],
    }
},{ timestamps: true })

const Comments = models.Comments || model("Comments",CommentSchema);

export default Comments;