import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BsCheckLg className = "service__list-icon"/>
            <p>Responsive Web Design</p>
          </li>
          <li>
            <BsCheckLg className = "service__list-icon"/>
            <p>Desktop application development</p>
          </li>
          <li>
            <BsCheckLg className = "service__list-icon"/>
            <p>Web Sites</p>
          </li>
          <li>
            <BsCheckLg className = "service__list-icon"/>
            <p>Online Stores </p>
          </li>
          

          </ul>


      </article>
      <article className="service">
        <div className="service__head">
          <h3>Defi/Metaverse Development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BsCheckLg className = "service__list-icon"/>
            <p>Interact developments with web3, involving deploying and interacting with smart contracts, monitoring on-chain data 
              and automating processes with a focus on security and attention to detail. </p>
          </li>
          <li>
            <BsCheckLg className = "service__list-icon"/>
            <p>DeFi development combining software and crypto engineering with knowledge of decentralized finance primitives to build applications 
              that enable yield earning strategies such as liquidity provision on AMMs. </p>
          </li>
    
          <li>
            <BsCheckLg className = "service__list-icon"/>
            <p>Main developments include : payment-related smart contracts (mainly Solidity),
               web3,ethers libraries & protocol updates.</p>
          </li>
          <li>
            <BsCheckLg className = "service__list-icon"/>
            <p>Support front-end applications growth</p>
          </li>
          

          </ul>


      </article>
      <article className="service">
        <div className="service__head">
          <h3>BlockChain </h3>
        </div>
        <ul className='service__list'>
          <li>
            <BsCheckLg className = "service__list-icon"/>
            <p>Researching high quality materials required for a particular blockchain project.</p>
          </li>
          <li>
            <BsCheckLg className = "service__list-icon"/>
            <p>Designing and developing applications using blockchain technology.</p>
          </li>
          <li>
            <BsCheckLg className = "service__list-icon"/>
            <p>Back end and front end application maintenance.</p>
          </li>
          <li>
            <BsCheckLg className = "service__list-icon"/>
            <p>Evaluating blockchain applications.</p>
          </li>
          <li>
            <BsCheckLg className = "service__list-icon"/>
            <p>Fully implemented and involved in the blockchain ecosystem for integrating the latest possible improvements.  </p>
          </li>
          <li>
            <BsCheckLg className = "service__list-icon"/>
            <p> Development Blockchain’s internal suite of tooling that interfaces with a variety
               of smart contracts on multiple blockchains and protocols</p>
          </li>
          

          </ul>


      </article>
      </div>
      
      </section>
  )}

export default Services
