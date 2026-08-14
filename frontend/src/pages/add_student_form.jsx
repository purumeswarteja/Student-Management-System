function Student_Form(){
    async function Add_stu(){
        const add_stu=await axios.post("http://localhost:8000/admin/student/add");
        
    }
return(
<form onSubmit={Add_stu}>
    <label htmlFor="id">Student ID :</label>
    <input
        type="text"
        id="id"
        placeholder="Enter student ID"
    />
    <br /><br />

    <label htmlFor="name">Student Name :</label>
    <input
        type="text"
        id="name"
        placeholder="Enter name"
    />
    <br /><br />

    <label htmlFor="email">Email :</label>
    <input
        type="email"
        id="email"
        placeholder="Enter email"
    />
    <br /><br />

    <label htmlFor="phone">Phone No :</label>
    <input
        type="text"
        id="phone"
        placeholder="Enter phone no"
    />
    <br /><br />

    <label htmlFor="dept">Department :</label>
    <select id="dept">
        <option value="">Select Department</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="EEE">EEE</option>
        <option value="MECH">MECH</option>
        <option value="CIVIL">CIVIL</option>
    </select>
    <br /><br />

    <label htmlFor="year">Year :</label>
    <select id="year">
        <option value="">Select Year</option>
        <option value="1">1st Year</option>
        <option value="2">2nd Year</option>
        <option value="3">3rd Year</option>
        <option value="4">4th Year</option>
    </select>
    <br /><br />

    <label htmlFor="section">Section :</label>
    <select id="section">
        <option value="">Select Section</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
    </select>
    <br /><br />

    <label>Gender :</label>

    <label htmlFor="male">Male</label>
    <input
        type="radio"
        id="male"
        name="gender"
        value="male"
    />

    <label htmlFor="female">Female</label>
    <input
        type="radio"
        id="female"
        name="gender"
        value="female"
    />

    <label htmlFor="others">Others</label>
    <input
        type="radio"
        id="others"
        name="gender"
        value="other"
    />

    <br /><br />

    <button type="submit">Submit</button>
</form>
)} 

export default  Student_Form;