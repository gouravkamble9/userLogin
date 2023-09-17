import React, { useContext } from 'react'
import { Context } from '../utils/context'
import Logedin from '../components/Logedin'
import Logedno from '../components/Logedno'
import './Home.css'

const Home = () => {
    const {isAuthenticated}=useContext(Context)
  return (
    <section className='home'>
        {isAuthenticated ? <Logedin/> : <Logedno/>}
    </section>
  )
}

export default Home