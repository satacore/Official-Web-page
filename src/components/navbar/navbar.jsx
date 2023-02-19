import './navbar.css'
import React from 'react'
import Logo from '../../assets/Navbarlogo.png'


const Navbar = () => {
  return (
    <header>
       <img src={Logo} alt="" />
       <nav>
          <a href='/#'>About Us</a>
          <a href='/#'>Services</a>
          <a href='/#'>Clients</a>
          <a href='/#'>Contact</a>
       </nav>
    </header>


  )
}
export default Navbar