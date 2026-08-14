import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

function AdminLoginPage(){
    const navigate=useNavigate();
    const [email,Setemail]=useState("");
    const [password,Setpassword]=useState("");

    async function VerifyAdmin(e){

        e.preventDefault();
        try{
        if(!email || !password){
            alert("input fields cant be empty");
            return;
        };
        const details={
            email:email,
            password:password
        };
        const check=await fetch("http://localhost:8000/admin/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(details)
        });
        const result=await check.json();
        if (result){
            navigate("/admin-dashboard");
        }
        else{
            alert("credintials did not matched");
        }
        

    }
    catch(err){
        console.log("error",err);
    }
        };
    
    return(
        <form onSubmit={VerifyAdmin}>
            <h1> enter ur login credintials </h1>
            <input type="text" value={email} onChange={(e)=>Setemail(e.target.value)} placeholder="enter email"></input>
            <br/><br/>
            <input type="text" value={password} onChange={(e)=>Setpassword(e.target.value)} placeholder="enter password"></input>
            <br/><br/>
            <button type="submit">LogIn</button>
        </form>
    )
}
export default AdminLoginPage;