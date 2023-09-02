import mongoose from "mongoose";

let isConnected=false;

export async function connectToDB(){
    mongoose.set("strictQuery",true);
    if (isConnected) {
        console.log("MongoDB is alrady connected!");
        return
    }else{
        try {
            await mongoose.connect(process.env.MONGODB_URI,{
                dbName:"Mahmudur",
                useNewUrlParser:true,
                useUnifiedTopology:true
            })
            isConnected=true;
            console.log("mongoDB connected!");
        } catch (error) {
            console.log(error);
        }
    }
}

