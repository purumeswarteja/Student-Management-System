import axios from "axios";
import { useState } from "react";
import  Student_Form from "./add_student_form";

function AdminDash(){
    const [students,Setstudents]=useState([]);
    const [student,Setstudent]=useState(false);
    const [addstudent,Setaddstudent]=useState(false);
    
    async function Student(e){
        

        const get_data=await axios.get("http://localhost:8000/admin/students");
        Setstudent(true);
        Setstudents(get_data.data);
       
    }
    async function Form(){
        
        Setaddstudent(true);

    }

    return (
    <div>
        <h1>Admin Dashboard</h1>
        <button type="button" onClick={Student}>Student</button>
        <button type="button"> Faculty</button>
        {student && (
            <div>
            {students.map((e)=>(
            <div key={e._id} >
                <p>{e.name}</p>
                <p>{e.studentId}</p>
                <p>{e.department}</p>
                <p>{e.phone}</p>
                
            </div>
        ))}
        <br/>
        <button type="button" onClick={Form}>Add Student</button>
        </div>
        
        
        )}
        {addstudent && (
            <div>
                <br/>
                < Student_Form/>
            </div>
        )}
    </div>
    )
}
export default AdminDash;