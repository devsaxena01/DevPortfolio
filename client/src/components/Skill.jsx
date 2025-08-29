import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/images/html.png',
    label: 'HTML',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css.jpeg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.png',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.png',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/mongodb.jpeg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/expressjs.png',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/reactjs.png',
    label: 'ReactJS',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/nodejs.png',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/sql.png',
    label: 'SQL',
    desc: 'database'
  },
  {
    imgSrc: '/images/github.png',
    label: 'Git/Github',
    desc: 'version control'
  },
  {
    imgSrc: '/images/dsa.jpeg',
    label: 'Data Structures and Algorithms',
    desc: 'DSA'
  },
  {
    imgSrc: '/images/cp.jpeg',
    label: 'Competitive Programming',
    desc: 'CP'
  },

];

const Skill = () => {
  return (
    <section id='skills' className='section'>
        <div className='container'>
            <h2 className='headline-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300  drop-shadow'>
                Essential Skills I have
            </h2>
            <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
            <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
                {
                    skillItem.map(({imgSrc , label , desc} , key) => (
                        <SkillCard
                        key={key}
                        imgSrc={imgSrc}
                        label={label}
                        desc={desc}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill