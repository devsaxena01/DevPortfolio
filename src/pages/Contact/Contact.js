import React from 'react'
import './Contact.css'
import {BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs'
const Contact = () => {
  return (
    <>
    <div className='contact'>
        <div className='card card0 border-0'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                    <div className='card1'>
                        <div className='row border-line'>
                            <img src="https://media.istockphoto.com/id/609801866/photo/contact-us.jpg?s=612x612&w=0&k=20&c=Qv7rJ9KCpH333_y4jZVJ0BCVc-4jQaHZp-Gf_8CGlBo=" alt="contact"/>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                      <div className='card2 d-flex card border-0 px-4 py-5'>
                    <div className='row'>
                        <div className='row'>
                        <h6>Contact With
                            <BsLinkedin color="blue" size={30} className="ms-2"/>
                            <BsGithub color="black" size={30} className="ms-2"/>
                            <BsFacebook color="blue" size={30} className="ms-2"/>
                        </h6>
                        </div>
                    <div className='row px-3 mb-4'>
                        <div className='line'/>
                        <small className='or text-center'>OR</small>
                        <div className='line'/>
                    </div>
                    <div className='row px-3'>
                        <input type='text' name='name' placeholder='Enter your name' className='mb-3'/>
                    </div>
                    <div className='row px-3'>
                        <input type='emaial' name='email' placeholder='Enter your email' className='mb-3'/>
                    </div>
                    <div className='row px-3'>
                        <textarea type='text' name='msg' placeholder='Write your message' className='mb-3'/>
                    </div>
                    <div className='row px-3'>
                        <button type='submit' className='button'>SEND MESSAGE</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact