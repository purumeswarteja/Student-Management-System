import { useNavigate } from "react-router-dom";
function Manage(){
    const navigate=useNavigate();
    function AdminLogin(){
        navigate("/admin-login");
    }
    return(
        <div>
            <form>
                <h1>welcome back to student management system</h1>
                <h2>who u are ? </h2>
                <button type="button" onClick={AdminLogin}>Admin</button>
                <button type="button">Faculty</button>
                <button type="button">Student</button>
            </form>
        </div>
    )
}
export default Manage;