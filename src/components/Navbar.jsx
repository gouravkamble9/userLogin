import React from "react";
import { useContext } from "react";
import { Context } from "../utils/context";

import "./Navbar.css";
const Navbar = () => {
  
    const {user,
        isAuthenticated,
        isLoading,
        logout,
        loginWithRedirect}=useContext(Context)

  return (
    <header className="navbar">
      <nav className="nav">
        <div className="logo">
          <span>HELLO</span>
        </div>

        <ul className="nav__menu">
          <li>HOME</li>
          <li>MENU</li>
          <li>ORDER</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>{isAuthenticated && <p>{user.name}</p>}</li>
          {
            isAuthenticated ? <li><button className='regis-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LOG OUT</button></li>
            :(
                <li> <button className="login-btn" onClick={()=>loginWithRedirect()}>LOG IN</button></li>
            )
          }
            
          
        </ul>

       
        
      </nav>
    </header>
  );
};

export default Navbar;
