import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function AdminDash(){
    const [students,showstudents]=useState([]);
    async function Student(){
        const get_data=await axios.get("http://localhost:8000/admin/students");
        showstudents(get_data.data);
        
    }

    return (
    <form>
        <h1>Admin Dashboard</h1>
        <button type="button" onClick={Student}>Student</button>
        <button type="button"> Faculty</button>
        {students.map((e)=>(
            <div key={e._id} >
                <p>e.name</p>
                <p>e.studentId</p>
                <p>e.department</p>
                <p>e.phone</p>
                <button type="button">Add Student</button>
            </div>
        ))}
        
    </form>
    )
}
export default AdminDash;