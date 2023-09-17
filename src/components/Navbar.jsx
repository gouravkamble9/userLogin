import React from "react";
import { useContext } from "react";
import { Context } from "../utils/context";
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

import "./Navbar.css";
const Navbar = () => {
  
    const {user,
        isAuthenticated,
        mobileMenu,
        SetMobileMenu,
        logout,
        loginWithRedirect}=useContext(Context)

  return (
    <header className="navbar">
      <nav className="nav">
        <div className="logo">
          <span>HELLO</span>
        </div>
        {mobileMenu ? <AiOutlineClose size={20} onClick={()=>SetMobileMenu(!mobileMenu)}/> :<GiHamburgerMenu size={20} className="mobile_menu" onClick={()=>SetMobileMenu(!mobileMenu)}/>}
        
        
        <ul className={`nav__menu ${mobileMenu ? "active" : ""}`}>
          <li>HOME</li>
          <li>MENU</li>
          <li>ORDER</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>{isAuthenticated && <p>{user.name}</p>}</li>
          {
            isAuthenticated ? <li><button className='regis-btn' onClick={() => {logout({ logoutParams: { returnTo: window.location.origin } })
            SetMobileMenu(!mobileMenu)}}>LOG OUT</button></li>
            :(
                <li> <button className="login-btn" onClick={()=>{loginWithRedirect() 
                  SetMobileMenu(!mobileMenu)}}>LOG IN</button></li>
            )
          }
            
          
        </ul>

       
        
      </nav>
    </header>
  );
};

export default Navbar;
