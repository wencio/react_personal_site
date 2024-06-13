import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <div>
      <header>
        <div className ="container header__container">
          <h5> Hello I'm</h5>
          <h1> Wencio Daniel Martinez</h1>
          <h5 className="text-light">Senior Technical Consultant/Quant/Software/Blockchain/Python/Solidity Developer</h5>
          <CTA/>
          <HeaderSocial/>
          {/*<div className="me">
            <img src={ME} alt=""/>

  </div>*/}
         
          <a href="#contact" className="scroll_down">Scroll Down</a>

        </div>

      </header>
    </div>
  )
}

export default Header
