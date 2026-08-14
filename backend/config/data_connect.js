const mongoose=require("mongoose");
async function mongodb(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/Student_Management");
        console.log("database connected");
    }
    catch(err){
        console.log("database error :",err);
    }
}

module.exports=mongodb;