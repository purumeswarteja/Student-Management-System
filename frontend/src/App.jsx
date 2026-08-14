import { useState } from 'react'
import './App.css'
import Manage from "./management.jsx"
import AdminLoginPage from "./pages/adminloginpage"
import AdminDashboard from "./pages/admindash"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Manage/>}/>
          <Route path="/admin-login" element={<AdminLoginPage/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
