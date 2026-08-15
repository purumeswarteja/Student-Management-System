const exp=require("express");
const app=exp();
const cors=require("cors");
const bcrypt=require("bcrypt");

const admindb=require("./config/admin_db");
const studentdb=require("./config/student_db");
const facultydb=require("./config/fac_db");


app.use(exp.json());
app.use(cors());

//admin login check
app.post("/admin/login",async (req,res)=>{
    const admin_check= await req.body;
    try{
        const admin=await admindb.findOne({email:admin_check.email});
        if (!admin){
            console.log("wrong admin details");
            res.send(false);
            return;
        }
        const ischeck=await bcrypt.compare(admin_check.password,admin.password);
        console.log(ischeck);
        res.send(ischeck);
    }
    catch(err){
        console.log("error occured in admin login",err);
    }
});

//getting all students
app.get("/admin/students",async (req,res)=>{
    const students=await studentdb.find();
    res.send(students);
    
});

// adding students
app.post("/admin/student/add",async (req,res)=>{
    console.log("reached");
    try{
    const new_student=await req.body;
    await studentdb.create(new_student);
    res.send(new_student);
    console.log(new_student);
    }
    catch(err){
        console.log(err);
    }
});

//deleting students
app.delete("/admin/student/delete/:id",async (req,res)=>{
    const del_student=await studentdb.findByIdAndDelete(req.params.id);
    res.send("deleted");
})

//updating students
app.put("/admin/student/update/:id",async (req,res)=>{
    const update_student=await studentdb.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.send(update_student);
});

//view faculties
app.get("/admin/faculty",async (req,res)=>{
    const faculties= await faculty.find();
    res.send(faculty);
});

// add faculties
app.post("/admin/faculty/add",async (req,res)=>{
    const new_fac=await facultydb.create(req.body);
    res.send(new_fac);
    console.log(new_fac);
});

// update faculties
app.put("/admin/faculty/update/:id",async (req,res)=>{
    const upfac=await facultydb.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.send(upfac);
});

//delete faculties
app.delete("/admin/faculty/delete/:id",async (req,res)=>{
    const delfac=await facultydb.findByIdAndDelete(req.params.id);
    res.send("deleted");
});

app.listen("8000",()=>{
    console.log("listening on port 8000");
});
