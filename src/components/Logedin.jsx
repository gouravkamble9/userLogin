import React from 'react'
import logedin from '../assets/login.svg'


const Logedin = () => {
  return (
    <div className='login' style={{width:"1200px",height:"calc(100vh - 50px)",display:"flex", 
    flexDirection:"column",margin:"0 auto",alignItems:"center" ,justifyContent:"center"}}>
      <img src={logedin} alt="" style={{width:"50%",height:"50%"}}/>
      <h1>USER IS LOGED IN</h1>
    </div>
  )
}

export default Logedin