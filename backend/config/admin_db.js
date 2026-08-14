const mongoose= require("mongoose");
const mongodb=require("./data_connect");
mongodb();
const admin_data=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
        
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
},{timestamps:true},
);


module.exports=mongoose.model("Admin",admin_data);