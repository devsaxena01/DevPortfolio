import React from 'react'
const aboutItems = [
  {
    label: 'Project done',
    number: 25
  },
  {
    label: 'Academic journey',
    number: 2
  }
];

const About = () => {
  return (
    <section id='about' className='section'>
        <div className='container'>
            <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
            <h2 className="text-4xl md:text-4xl font-bold text-center text-indigo-600 mb-8">About Me</h2>
                <p className=' mb-4 md:mb-8 text-xl md:max-w-[60ch] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-purple-500 animate-pulse drop-shadow-md'>
                    Passionate about MERN Stack Development, specializing in scalable web applications, UI/UX design, and API development.
                    Keenly interested in building scalable modern websites for the future<br/><br/> 
                     ----- Core curriculum knowledge includes -----
                    <br/>
                    - Computer Networks <br/>
                    - Operating Systems <br/>
                    - Digital Logic & Design <br/>
                    - Data Structures and algorithms <br/>
                    - Object-Oriented Programming<br/>
                    - Database Management Systems <br/>
                    - Design & Analysis of Algorithms <br/><br/> 
                    *** Enjoys exploring new technologies, participating in hackathons, and collaborating on open-source projects.
                    Always eager to learn, adapt, and contribute to innovative solutions that make a real-world impact.
                </p>
                <div className=' mt-12 flex flex-wrap items-center gap-4 md:gap-7 '>
                    {
                        aboutItems.map(({label , number} , key) =>(
                            <div key={key}>
                                <div className='flex items-center md:mb-2'>
                                    <span className='text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-bounce drop-shadow-2xl'>{number}</span>
                                    <span className='text-sky-400 font-semibold md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-bounce drop-shadow-2xl'>+</span>
                                </div>
                                <p className='text-yellow-300'>{label}</p>
                            </div>
                        ))
                    }
                    <img 
                    src="./images/download.jpg"
                    alt="logo"
                    width={40}
                    height={40}
                    className='ml-auto md:w-[40px] md:h-[40px]'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About