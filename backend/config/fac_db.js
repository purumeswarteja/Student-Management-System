const mongoose= require("mongoose");
const fac=new mongoose.Schema({
    facultyId:String,
    name:String,
    email:String,
    phone:String,
    department:String,
    qualification:String,
    experience:Number,
    gender:String,
    });

module.exports=mongoose.model("Faculty",fac);