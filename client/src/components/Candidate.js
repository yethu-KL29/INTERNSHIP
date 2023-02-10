import React from 'react'
import { Button, Input, TextField, Typography, InputLabel, Tab, chipClasses } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./candidate.css"


export const Candidate = () => {
    const [signup, setSignup] = useState(false)
    return (
        <div className='login'>

            
            

            <form className='form'>
                <div className='content'>

                    <Typography variant='h3' sx={{
                        color: 'red',
                        fontWeight: 800,
                    }}>Login</Typography>
                    {signup 
                     &&   <TextField placeholder='Name' name='Name' sx={{
                        backgroundColor: "white",
                        width: '20vw'
                     
                    }} />
                }
                    <TextField placeholder="Email" name='email' sx={{
                        backgroundColor: "white",
                        width: '20vw'
                    }} />
                    <TextField placeholder='password' name='password' sx={{
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
