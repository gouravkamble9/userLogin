import React from 'react'
import logedno from '../assets/Login-pana.svg'

const Logedno = () => {
  return (
    <div className='login' style={{maxWidth:"1200px",height:"calc(100vh - 50px)",display:"flex", 
    flexDirection:"column",margin:"0 auto",alignItems:"center" ,justifyContent:"center"}}>
      <img src={logedno} alt="" style={{width:"200px",height:"200px"}}/>
      <h1>PLEASE LOGIN</h1>
    </div>
  )
}

export default Logedno