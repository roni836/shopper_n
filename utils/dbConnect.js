import mongoose from "mongoose"


export default function DbConnect(){
    try{
        mongoose.connect("mongodb://localhost:27017/shopper");
        console.log("connected to mongoDb")
    }catch(err){
        console.log("failed to conect",err)
    }
}