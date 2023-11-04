import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    
    password: ""
   
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setError('')
    // console.log(e)
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async  (e) => {
    e.preventDefault();
    if (validateData()){
      const {name,email,password,confirm_password}=data
      const res=await fetch('http://localhost:8080/api/account/login',{
      method:"POST",
      body:JSON.stringify({name:name,email:email,password:password,confirm_password:confirm_password}),
      headers:{
        'Content-Type':'Application/json',
        
      }
      })
      const result=await res.json()
     if(result.status==="Success"){
      localStorage.setItem("authToken",result.token)
      navigate('/')
     }
     else{
      setError("Refresh Page or try later")
     }
    }
    else{
      console.log("invalid")
    }
  };

  const validateData = () => {
   
    const { name, email, password, confirm_password } = data;
    if (name && email && password && confirm_password) {
     if(password !=confirm_password){
setError("Pw and confirm pw didnt match")
return false
     }
     else{
return true
     }

      
    } else {
   setError("Every field is required")
   return false
    }
  };

  return (
    <>
      <FormWrapper>
        <h1 style={{color:'red' ,fontWeight:'bolder'}}>{error}</h1>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
       
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
       
          <button type="submit">Login</button>
        </form>
      </FormWrapper>
      <ToastContainer />
    </>
  );
};
const FormWrapper = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: wheat;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 2rem;
    padding: 1rem 5rem;
    input {
      background-color: transparent;
      padding: 0.5rem;
      border: 0.1rem solid green;
      border-radius: 0.4rem;
      color: black;
      width: 100%;
    }
  }
  button {
    border-radius: 2rem;
    background-color: #55c2da;
    padding: 5px;
  }
  button:hover {
    color: white;
    background-color: red;
  }
`;

export default Login;
