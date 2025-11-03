import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RedirectPage = () => {
    const navigate=useNavigate()

    useEffect(()=>{
        const localVar=JSON.parse(localStorage.getItem('Authentication'))||{};
    // console.log(localVar.Auth);

    localVar.Auth ?navigate("/home"):navigate('/login');
        
    })
  return (
    <div></div>
  )
}

export default RedirectPage