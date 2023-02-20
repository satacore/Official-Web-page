import './navbar.css'
import React from 'react'
import Logo from '../../assets/Navbarlogo.png'


const Navbar = () => {
  return (
    <header>
       <img src={Logo} alt="" />
       <nav>
          <a href='/#'>ABOUT US</a>
          <a href='/#'>SERVICES</a>
          <a href='/#'>CLIENTS</a>
          <a href='/#'>CONTACT</a>
       </nav>
    </header>


  )
}
export default Navbar 
