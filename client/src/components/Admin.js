import React from 'react'
import { Button, Input, TextField, Typography, InputLabel, Tab, chipClasses } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./candidate.css"


export const Admin = () => {
    const navigate  = useNavigate()
    // const [isSignUp, setisSignUp] = useState(false)
    const [input, setinput] = useState({
      email: "",
      password: "",
    })
    const sendRequest = async () => {
      const res = await axios.post("http://localhost:5000/user/login", {
        email:String( input.email),
        password: String(input.password)
      })
      
     .catch((err) => {
        console.log(err)
      }
     
      )
     
      const data = res.data
      return data
      
     
    }
  
    const handleChange = (e) => {
      setinput({
        ...input,
        [e.target.name]: e.target.value
      })
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      sendRequest()
      .then((data)=>console.log(data.user))
      .then(()=>navigate("/"))
      
    }
  
    const [signup, setSignup] = useState(false)
    return (
        <div className='login'>

            
            

            <form className='form' onSubmit={handleSubmit}>
                <div className='content'>

                    <Typography variant='h3' sx={{
                        color: 'red',
                        fontWeight: 800,
                    }}>Login</Typography>
                    {signup 
                     &&   <TextField onChange={handleChange} value={input.name} placeholder='Name' name='name' sx={{
                        backgroundColor: "white",
                        width: '20vw'
                     
                    }} />
                }
                    <TextField onChange={handleChange} value={input.email} placeholder="Email" name='email' sx={{
                        backgroundColor: "white",
                        width: '20vw'
                    }} />
                    <TextField onChange={handleChange} value={input.password} placeholder='password' name='password' sx={{
                        backgroundColor: "white",
                        width: '20vw'

                    }} />
                </div>
                <div className='button'>
                    <Button type='submit' variant="contained" sx={{
                        backgroundColor: "red",
                    }}>Submit</Button>
                    <Button   sx={{color:"red"}}
                    onClick={() => {
                        setSignup(true);
                    }}
                    >Signup?</Button>
                    <Button   sx={{color:"red"}}
                    onClick={() => {
                        setSignup(false);
                    }}
                    >Login?</Button>
                </div>

            </form>
        </div>
    )
}
