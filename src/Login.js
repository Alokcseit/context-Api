import React from 'react'
import UserContext from './context/UserContext'
import { useState,useContext } from 'react'
function Login() {
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const {SetUser , User}=useContext(UserContext)
    const Login=(e)=>{
        e.preventDefault()
        console.log(name,password)
        SetUser({name:name,password:password})
        console.log(User)

    }
    
  return (
    <div style={{display:'flex',flexDirection:'column', width:'50%',justifyContent:'center',alignItems:'center'}}>
       <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
       <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
       <button onClick={Login}>Login</button>
    </div>
  )
}

export default Login
