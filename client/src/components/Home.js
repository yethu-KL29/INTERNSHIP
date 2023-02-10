import { Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
export const Home = () => {
  return (
    <div className='home'>
        <div className='navbar'>
            
        </div>
        <div className='content'>
        <Typography variant='h3' sx={{
            color: 'balck',
            fontWeight: 800,
        }}>WELCOME</Typography>
        <Tabs>
                <Tab  LinkComponent={Link} to="/candidate" label='candidate' sx={{color:"red"}} />
                <Tab LinkComponent={Link} to="/admin" label='admin' sx={{color:"red"}} />
        </Tabs>
        </div>
    </div>
  )
}
