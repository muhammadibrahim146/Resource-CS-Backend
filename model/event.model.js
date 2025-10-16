import mongoose from "mongoose";
const eventSchema =new mongoose.Schema({
    title:{
        type:String,
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    date:{
        type:Date,
    },
    
});
export const Event =mongoose.model("Event",eventSchema);