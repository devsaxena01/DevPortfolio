import React from 'react'
import './Techstack.css'
import { TechstackList } from '../../Utils/TechstackList'
const Techstack = () => {
  return (
    <>
    <div className="container techstack" id='tech-stack'>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Technologies Stack</h2>
        <hr/>
        <p className="pb-3 text-center">  As a computer and information systems
               manager, I am a highly skilled and experienced 
               professional with a passion for using technology 
               to solve business problems. My strong background.
      </p>
      <div className="row">
        {TechstackList.map(tech=> (
            <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                    <div className="card-content">
                      <div className="card-body">
                        <div className="media d-flex justify-content-center">
                            <div className="align-self-center">
                            <tech.icon className="tech-icon"/>
                            </div>
                            <div className="media-body">
                                <h5>{tech.name}</h5>
                            </div>
                        </div>
                        </div>  
                    </div>
                </div>
            </div>
        ))}
    </div>
    </div>
    </>
  )
}

export default Techstack