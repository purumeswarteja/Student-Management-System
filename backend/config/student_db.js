const mongoose=require("mongoose");

const student=new mongoose.Schema({
        studentId:{
            type:String,
            required:["enter student id",true]
        },
        name:{
            type:String,
            required:true,
        },
        email:{
        type:String,
        required:true
        },
        phone:{
            type:String,
            required:true
        },
        department:{
            type:String,
            required:true
        },
        year:{
            type:Number,
            required:true
        },
        section:{
        type:String,
        required:true
        },
        gender:{
            type:String,
            required:true
        }
    });
    
module.exports=mongoose.model("Student",student);