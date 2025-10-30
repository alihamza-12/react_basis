import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, useNavigate } from 'react-router-dom'

const Applayout = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    const localVar=JSON.parse(localStorage.getItem('Authentication'))||{};
    // console.log(localVar.Auth);

    localVar.Auth ?console.log("Hello You are Authicate User"):navigate('/login');
  },[])

  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Applayout