import React from 'react'
import { ButtonOutline, ButtonPrimary } from './Button'
import resume from '../../docs/Resume.pdf'

const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36'>
        <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10'>
            <div>
                <div className='flex items-center gap-3'>
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img src='./images/download.jpg' width={40} height={40} className='img-cover' alt='Dev'>
                        </img>
                    </figure>
                    <div className='flex items-centergap-1.5 text-zinc-400 text-sm tracking-wide'>
                        <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                            <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                        </span>
                        Available for work
                    </div>
                </div>
                <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mg-10  text-5xl text-zinc-300'>
                    Hi! I&apos;m <span className='font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-rose-400 to-amber-300 animate-pulse drop-shadow-md'>Dev Saxena</span>
                    <h3 className=' text-zinc-400 mt-2 text-2xl'>MERN Stack Developer,Full Stack developer & AI Enthusiast</h3>

                    <p className='text-xl mt-6 text-zinc-400'>
                         Building scalable modern websites for the future
                    </p>
                    
                    {/* Building scalable modern websites for the future */}
                </h2>
                <div className=' ml-10 flex items-center gap-3'>
                    <a 
                    className='px-2 py-2 bg-slate-700 text-white font-semibold rounded-xl shadow-md hover:bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out'
                    href={resume} 
                    download="Resume.pdf">
                    <ButtonPrimary
                    label="Resume"
                    icon="download"
                    />
                    </a>

                     <a 
                     className='px-2 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out'
                    href='#contact'>
                    <ButtonPrimary
                    label="Get in Touch"
                    icon="arrow_downward"
                    />
                    </a>
                </div>
            </div>

            <div className='hidden mt-10 lg:block'>
                <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
                    <img src='./images/download.jpg' 
                    alt='Saxena' 
                    width={656} 
                    height={800} 
                    className='w-full'></img>
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero