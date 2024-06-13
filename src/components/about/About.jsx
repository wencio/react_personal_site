import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from  'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      
      <h5>Get to Know </h5>
      <h2>About Me </h2>

      <div className="container about__container">
       <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
          </div>
          <div className="about__content">
           <div className="about__cards">
              <article className ='about__card'>
               <FaAward className = 'about__icon'/>
                <h5>Experience</h5>
                <small>30+ Years Working </small>
               </article>
               <article className ='about__card'>
               <FaUsers className = 'about__icon'/>
                 <h5>Clients</h5>
                <small>100+ Worldwide</small>
               </article>
               <article className ='about__card'>
                 <VscFolderLibrary className = 'about__icon'/>
                 <h5>Projects</h5>
                 <small>50+ Completed </small>
              </article>
          </div>
          <p> I am a strategic and seasoned Senior Technical Consultant and Software/Blockchain/Solidity Developer with a strong background in software engineering. My expertise lies in developing advanced technological solutions, particularly in JavaScript, Python, and Solidity. I specialize in quant projects in Python, smart contract development, and decentralized applications (dApps). I am actively seeking opportunities that challenge my skills and allow me to contribute to the development of future-emerging technologies. Recently, I've expanded my knowledge into data engineering and AI, to enhance the management and analysis of large datasets in technological projects.</p>
          <a href='#contact' className = 'btn btn-primary'>Let's Talk</a>
        </div>

        </div>
     
      
      </section>
  )
}

export default About
