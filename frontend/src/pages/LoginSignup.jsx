import React from 'react'
import Login from './Login';
import Signup from './Signup';
import { Button } from '@mui/material'

import styled from 'styled-components';

import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const LoginSignup = () => {
    const [tab,setTab]=useState(true)
  return (

    <Container >
      <h1 style={{textAlign:'center',marginBottom:'10px',color:'red'}}>Chat Book Gate</h1>
      <NavLink className='btn btn-danger text-black ' to='/adminlogin' >GUEST LOGIN</NavLink>
   <div className="top" style={{textAlign:'center' ,marginTop:'1%'}}>
   <Button  variant='contained'  style={{borderRadius:'50px'}} onClick={()=>{setTab(true)}} >Login</Button>
   <Button variant='contained'  style={{borderRadius:'50px'}} onClick={()=>{setTab(false)}}  >Register</Button>

{tab?<Login/> :<Signup/>}
  
   </div>
    </Container>
  )
}

const Container=styled.div`
background-color:wheat;
NavLink{
 border:2px solid aqua;
}
`

export default LoginSignup