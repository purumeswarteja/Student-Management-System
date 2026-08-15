import axios from "axios";
import {useState} from "react";

function Student_Form(){
    const [student,Setstudent]=useState({
            studentId:"",
            name:"",
            email:"",
            phone:"",
            department:"",
            year:"",
            section:"",
            gender:"",
    })
    
    async function Add_Stu(e){
        e.preventDefault()
        console.log(student);
        try{
        const add_stu=await axios.post("http://localhost:8000/admin/student/add",student);
        console.log("called api");  
        }
        catch(err){
            console.log("error :",err);
        }  
    }
return(
<form onSubmit={Add_Stu}>
    <label htmlFor="id">Student ID :</label>
    <input
        type="text"
        id="id"
        placeholder="Enter student ID"
        value={student.studentId}
        onChange={(e)=>Setstudent({
            ...student,studentId:e.target.value
        })}
    />
    <br /><br />

    <label htmlFor="name">Student Name :</label>
    <input
        type="text"
        id="name"
        placeholder="Enter name"
        value={student.name}
        onChange={(e)=>{Setstudent({
            ...student,name:e.target.value
        })}}
    />
    <br /><br />

    <label htmlFor="email">Email :</label>
    <input
        type="email"
        id="email"
        placeholder="Enter email"
        value={student.email}
        onChange={(e)=>{Setstudent({
            ...student,email:e.target.value
        })}}
    />
    <br /><br />

    <label htmlFor="phone">Phone No :</label>
    <input
        type="text"
        id="phone"
        placeholder="Enter phone no"
        value={student.phone}
        onChange={(e)=>{Setstudent({
            ...student,phone:e.target.value
        })}}
    />
    <br /><br />

    <label htmlFor="dept">Department :</label>
    <select id="dept" value={student.department}
    onChange={(e)=>{Setstudent({...student,department:e.target.value})}}
    >
        <option value="">Select Department</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="EEE">EEE</option>
        <option value="MECH">MECH</option>
        <option value="CIVIL">CIVIL</option>
    </select>
    <br /><br />

    <label htmlFor="year">Year :</label>
    <select id="year" value={student.year}
        onChange={(e)=>{Setstudent({
            ...student,year:e.target.value
        })}}>
        <option value="">Select Year</option>
        <option value="1">1st Year</option>
        <option value="2">2nd Year</option>
        <option value="3">3rd Year</option>
        <option value="4">4th Year</option>
    </select>
    <br /><br />

    <label htmlFor="section">Section :</label>
    <select id="section" value={student.section}
        onChange={(e)=>{Setstudent({
            ...student,section:e.target.value
        })}}>
        <option value="">Select Section</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
    </select>
    <br /><br />

    <label htmlFor="gender" >Gender :</label>

    <label htmlFor="male">Male</label>
    <input
        type="radio"
        id="male"
        name="gender"
        value="male"
        
        onChange={(e)=>{Setstudent({
            ...student,gender:e.target.value
        })}}
    />

    <label htmlFor="female">Female</label>
    <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        
        onChange={(e)=>{Setstudent({
            ...student,gender:e.target.value
        })}}
    />

    <label htmlFor="others">Others</label>
    <input
        type="radio"
        id="others"
        name="gender"
        value="other"
        onChange={(e)=>{Setstudent({
            ...student,gender:e.target.value
        })}}
    />

    <br /><br />

    <button type="submit">Submit</button>
</form>
)} 

export default  Student_Form;