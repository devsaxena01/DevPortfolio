import React from 'react'
import "./Menus.css";
import {FcHome} from 'react-icons/fc';
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
                    <div className="nav-link"><FcHome/>Home</div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"><FcHome/>About</div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"><FcHome/>Education</div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"><FcHome/>Work Experiance</div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"><FcHome/>Tech Stack</div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"><FcHome/>Projects</div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"><FcHome/>Contact</div>
                </div>
            </div>
          </>
        ):(
       <>
                <div className="nav-item">
                    <div className="nav-link"><FcHome title="Home"/></div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"><FcHome title="About"/></div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"><FcHome title="Education"/></div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"><FcHome title="Work Experiance"/></div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"><FcHome title="Tech Stack"/></div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"><FcHome title="Projects"/></div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"><FcHome title="Contact"/></div>
                </div>
       </>
        )}
    </>
  );
};

export default Menus;