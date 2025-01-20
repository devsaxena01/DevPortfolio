import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <>
    <div className=" project">
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Top recent Projects</h2>
        <hr/>
        <p className="pb-3 text-center">  As a computer and information systems
               manager, I am a highly skilled and experienced 
               professional with a passion for using technology 
               to solve business problems. My strong background.
      </p>
      <div className='row' id='ads'>
        <div className='col-md-4'>
            <div className='card rounded'>
                <div className='card-image'>
                    <span className='card-notify-badge'>Full Stack</span>
                    <img src="https://images.freecreatives.com/wp-content/uploads/2015/03/Huge-Backgrounds-63.jpg" alt="projects1"/>
                </div>
                <div className='card-image-overly m-auto mt-3'>
                    <span className='card-detail-badge'>MongoDB</span>
                    <span className='card-detail-badge'>expressJs</span>
                    <span className='card-detail-badge'>ReactJs</span>
                    <span className='card-detail-badge'>NodeJs</span>
                </div>
                <div className='card-body text-center'>
                    <div className='ad-title m-auto'>
                        <h5 className='text-uppercase'>Portfolio Project</h5>
                    </div>
                    <a className='ad-btn' href='#'>view</a>
                </div>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='card rounded'>
                <div className='card-image'>
                    <span className='card-notify-badge'>Full Stack</span>
                    <img src="https://images.freecreatives.com/wp-content/uploads/2015/03/Huge-Backgrounds-63.jpg" alt="projects1"/>
                </div>
                <div className='card-image-overly m-auto mt-3'>
                    <span className='card-detail-badge'>MongoDB</span>
                    <span className='card-detail-badge'>expressJs</span>
                    <span className='card-detail-badge'>ReactJs</span>
                    <span className='card-detail-badge'>NodeJs</span>
                </div>
                <div className='card-body text-center'>
                    <div className='ad-title m-auto'>
                        <h5 className='text-uppercase'>Portfolio Project</h5>
                    </div>
                    <a className='ad-btn' href='#'>view</a>
                </div>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='card rounded'>
                <div className='card-image'>
                    <span className='card-notify-badge'>Full Stack</span>
                    <img src="https://images.freecreatives.com/wp-content/uploads/2015/03/Huge-Backgrounds-63.jpg" alt="projects1"/>
                </div>
                <div className='card-image-overly m-auto mt-3'>
                    <span className='card-detail-badge'>MongoDB</span>
                    <span className='card-detail-badge'>expressJs</span>
                    <span className='card-detail-badge'>ReactJs</span>
                    <span className='card-detail-badge'>NodeJs</span>
                </div>
                <div className='card-body text-center'>
                    <div className='ad-title m-auto'>
                        <h5 className='text-uppercase'>Portfolio Project</h5>
                    </div>
                    <a className='ad-btn' href='#'>view</a>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Projects