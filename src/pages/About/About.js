import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
    <div className="about" id='about'>
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-6 about-img">
            <img src="https://images.freecreatives.com/wp-content/uploads/2015/03/Huge-Backgrounds-63.jpg" alt="Dev Saxena"/>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-6 about-content">
              <h1>About Me</h1>
              <p>
              As a computer and information systems
               manager, I am a highly skilled and experienced 
               professional with a passion for using technology 
               to solve business problems. My strong background 
               in computer science, coupled with my commitment to
                ensuring that each technology project I manage is
                 completed on time, on budget, and to the highest 
                 standards of quality, makes me a valuable asset to 
                 any organization seeking to improve its technology 
                 infrastructure.
              </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default About