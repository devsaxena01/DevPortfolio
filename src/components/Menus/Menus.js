import React from 'react'
import "./Menus.css";
import { Link } from 'react-scroll';
import {FcHome,FcAbout,FcBiotech,FcBusinessContact,FcPortraitMode,FcReadingEbook,FcVideoProjector} from 'react-icons/fc';
const Menus = ({toggle}) => {
  return (
    <>
        {toggle ? (
            <>
        <div className="navbar-profile-pic">
            <img src="https://images.freecreatives.com/wp-content/uploads/2015/03/Huge-Backgrounds-63.jpg" alt="Dev Saxena"/>
        </div>
            <div className="nav-items">
                <div className="nav-item">
                    <div className="nav-link">
                        <Link 
                        to="home" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}>
                        <FcHome/>Home
                        </Link>
                    </div>
                </div>
                <div className="nav-item">
                <div className="nav-link">
                        <Link 
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}>
                        <FcAbout/>About
                        </Link>
                    </div>
                </div>
                <div className="nav-item">
                <div className="nav-link">
                        <Link 
                        to="education" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}>
                        <FcReadingEbook/>Education
                        </Link>
                    </div>
                </div>
                <div className="nav-item">
                <div className="nav-link">
                        <Link 
                        to="tech-stack" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}>
                        <FcBiotech/>Tech Stack
                        </Link>
                    </div>
                </div>
                <div className="nav-item">
                <div className="nav-link">
                        <Link 
                        to="projects" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}>
                        <FcVideoProjector/>Projects
                        </Link>
                    </div>
                </div>
                <div className="nav-item">
                <div className="nav-link">
                        <Link 
                        to="work-experience" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}>
                        <FcPortraitMode/>Work Experience
                        </Link>
                    </div>
                </div>
                <div className="nav-item">
                <div className="nav-link">
                        <Link 
                        to="contact" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}>
                        <FcBusinessContact/>Contact
                        </Link>
                    </div>
                </div>
            </div>
          </>
        ):(
       <>
                <div className="nav-item">
                <div className="nav-link">
                        <Link 
                        to="home" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}>
                        <FcHome title='home'/>
                        </Link>
                    </div>
                </div>
                <div className="nav-item">
                <div className="nav-link">
                        <Link 
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}>
                        <FcAbout title='about'/>
                        </Link>
                    </div>
                </div>
                <div className="nav-item">
                <div className="nav-link">
                        <Link 
                        to="education" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}>
                        <FcReadingEbook title='education'/>
                        </Link>
                    </div>
                </div>
                <div className="nav-item">
                <div className="nav-link">
                        <Link 
                        to="tech-stack" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}>
                        <FcBiotech title='tech-stack'/>
                        </Link>
                    </div>
                </div>
                <div className="nav-item">
                <div className="nav-link">
                        <Link 
                        to="projects" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}>
                        <FcVideoProjector title='projects'/>
                        </Link>
                    </div>
                </div>
                <div className="nav-item">
                <div className="nav-link">
                        <Link 
                        to="work-experience" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}>
                        <FcPortraitMode title='work-experience'/>
                        </Link>
                    </div>
                </div>
                <div className="nav-item">
                <div className="nav-link">
                        <Link 
                        to="contact" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}>
                        <FcBusinessContact title='contact'/>
                        </Link>
                    </div>
                </div>
       </>
        )}
    </>
  );
};

export default Menus;