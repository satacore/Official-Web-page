import './navbar.css'
import React from 'react'
import { Link } from 'react-scroll'
import Logo from '../../assets/Navbarlogo.png'


  const Navbar = () => {
    return (
      <header>
        <img src={Logo} alt="" />
        <nav>
            <p><Link to="aboutus" spy={true} smooth={true} offstet={50} duration={500} ><button>ABOUT US</button></Link></p>
            <p><Link to="services" spy={true} smooth={true} offstet={50} duration={500} ><button>SERVICES</button></Link></p>
            <p><Link to="clients" spy={true} smooth={true} offstet={50} duration={500} ><button>CLIENTS</button></Link></p>
            <p><Link to="contact" spy={true} smooth={true} offstet={50} duration={500} ><button>CONTACT</button></Link></p>
        </nav>
      </header>


    )
  }

export default Navbar 
