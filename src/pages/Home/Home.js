import React from 'react'
import './Home.css';
import resume from '../../assets/docs/devsaxena.pdf';
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div>
       <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hi I'm a</h2>
          <h1>
            <Typewriter
            options={{
              strings:["Full Stack Developer!","Mern Stack Developer!"],
              autoStart:true,
              loop:true,
            }}
            />
          </h1>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-resume" href={resume} download="devsaxena.pdf">My Resume</a>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Home