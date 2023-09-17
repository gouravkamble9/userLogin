import React from 'react'
import logedno from '../assets/Login-pana.svg'

const Logedno = () => {
  return (
    <div className='login' style={{width:"1200px",height:"calc(100vh - 50px)",display:"flex", 
    flexDirection:"column",margin:"0 auto",alignItems:"center" ,justifyContent:"center"}}>
      <img src={logedno} alt="" style={{width:"50%",height:"50%"}}/>
      <h1>PLEASE LOGIN</h1>
    </div>
  )
}

export default Logedno