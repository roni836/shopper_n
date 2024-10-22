import mongoose from "mongoose";
import User from "./User";
import Product from "./Product";
const OrderSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,required:true,ref:User},
    items:[{
        item :{type:mongoose.Schema.Types.ObjectId,required:true,ref:Product},
        quantity :{type:Number,required:true,default:1},
        
    }],
    isOrder:{type:Boolean,required:true,default:false},

    //further add address_id, coupon_id etc
})

export default mongoose.models.Order || mongoose.model("Order",OrderSchema)