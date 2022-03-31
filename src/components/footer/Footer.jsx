import React from 'react'
import './footer.css'
import {GrFacebookOption} from 'react-icons/gr'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub}  from 'react-icons/fa'



const Footer = () => {
  return (
<footer>

  <a href="#" className = 'footer__logo'>WDM</a>
  <ul className = 'permalinks'>
    <li> <a href="#">Home</a></li>
    <li> <a href="#about">About</a></li>
    <li> <a href="#experience">Experience</a></li>
    <li> <a href="#services">Services</a></li>
    <li> <a href="#portfolio">Portfolio</a></li>
    <li> <a href="#testimonials">Testimonials</a></li>
    <li> <a href="#contact">Contact</a></li>

  </ul>

  <div className="footer__socials">
    {/*<a href="https://facebook.com" >
      <GrFacebookOption/>
    </a>
    <a href="https://instagram.com" >
      <FaInstagram/>
  </a>*/}

    <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
    <a href="https://twitter.com" >
       <FaTwitterSquare/>
    </a>
  </div>

  <div className="footer__copyright">
    <small>&copy; Wencio Daniel Martinez. All rights reserved</small>
  </div>

</footer>
  )
}

export default Footer