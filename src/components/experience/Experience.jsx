import React from 'react'
import './experience.css'
import {BsFileEarmarkCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5> What Skills I Have</h5>
      <h2>My Experience-FullStack Developer</h2>
      <div className="container experience__container">
        <div className = "experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className = "experience__details" >
              <BsFileEarmarkCheckFill className="experience__details-icons" />
              <div>
              <h4>HTML</h4>
              <small className = "text-light">Experienced</small>
              </div>
            </article>
            <article className = "experience__details" >
              <BsFileEarmarkCheckFill className="experience__details-icons" />
              <div>
              <h4>CSS</h4>
              <small className = "text-light">Intermediate</small>
              </div>
              
            </article>
            <article className = "experience__details" >
              <BsFileEarmarkCheckFill className="experience__details-icons" />
              <div>
              <h4>JavaScript</h4>
              <small className = "text-light">Intermediate</small>
              </div>
              
            </article>
            <article className = "experience__details" >
              <BsFileEarmarkCheckFill className="experience__details-icons" />
              <div>
              <h4>ChakraUI</h4>
              <small className = "text-light">Intermediate</small>
              </div>
           
            </article>
            <article className = "experience__details" >
              <BsFileEarmarkCheckFill className="experience__details-icons" />
              <div>
              <h4>TailWind</h4>
              <small className = "text-light">Basic</small>

              </div>
             
            </article>
            <article className = "experience__details" >
              <BsFileEarmarkCheckFill className="experience__details-icons" />
              <div>
              <h4>React</h4>
              <small className = "text-light">Intermediate</small>
              </div>
            
            </article>
            <article className = "experience__details" >
              <BsFileEarmarkCheckFill className="experience__details-icons" />
              <div>
              <h4>Solidity</h4>
              <small className = "text-light">Intermediate</small>
              </div>
              
            </article>


          </div>

        </div>
        <div className = "experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          
        <article className = "experience__details" >
              <BsFileEarmarkCheckFill className="experience__details-icons" />
              <div>
              <h4>Node Js</h4>
              <small className = "text-light">Intermediate</small>
              </div>
              
            </article>
            <article className = "experience__details" >
              <BsFileEarmarkCheckFill className="experience__details-icons" />
              <div>
              <h4>BlockChain </h4>
              <small className = "text-light">Advanced</small>

              </div>
             
            </article>
            <article className = "experience__details" >
              <BsFileEarmarkCheckFill className="experience__details-icons" />
              <div>
              <h4>Truffle</h4>
              <small className = "text-light">Intermediate</small>

              </div>
              
            </article>
            <article className = "experience__details" >
              <BsFileEarmarkCheckFill className="experience__details-icons" />
              <div>
              <h4>Brownie</h4>
              <small className = "text-light">Basic</small>

              </div>
             
            </article>
            <article className = "experience__details" >
              <BsFileEarmarkCheckFill className="experience__details-icons" />
              <div>
              <h4>HardHat</h4>
              <small className = "text-light">Intermediate</small>
                </div>
              
            </article>
            <article className = "experience__details" >
              <BsFileEarmarkCheckFill className="experience__details-icons" />

              <div>
              <h4>SQLite</h4>
              <small className = "text-light">Basic</small>
              </div>
            </article>
            <article className = "experience__details" >
              <BsFileEarmarkCheckFill className="experience__details-icons" />
              <div>
              <h4>Python</h4>
              <small className = "text-light">Advanced</small>
              </div>
              
            </article>
            <article className = "experience__details" >
              <BsFileEarmarkCheckFill className="experience__details-icons" />
              <div>
              <h4>Golang</h4>
              <small className = "text-light">Intermediate</small>
              </div>
              
            </article>
            
          </div>


        </div>
        
      </div>     
      
      </section>
  )
}

export default Experience
