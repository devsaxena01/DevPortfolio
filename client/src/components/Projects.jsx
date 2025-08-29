import React from 'react'
import ProjectCard from './ProjectCard';

const projects = [
  {
    imgSrc: '/images/chat-app-logo.avif',
    title: 'A Real time chat app',
    desc:['• Developed a real-time chat platform with Socket.IO enabling instant messaging and live user status updates.', '• Implemented JWT-based authentication and authorization ensuring secure login and access control.' ,'• Designed and integrated user profiles with avatar management using Cloudinary for media storage.' ,'• Built media upload functionality (images/files) with optimized storage and retrieval.' ,'• Integrated message timestamps, seen status, and online/offline indicators for enhanced user experience.' ,'• Created a responsive and modern UI using React.js and Tailwind CSS for seamless cross-device usability.' ,'• Utilized MongoDB (Mongoose) for scalable database management and Express.js for RESTful APIs.'],
    tags: ['MongoDB', 'ExpressJs', 'ReactJS' , 'NodeJS' , 'TailwindCSS' , 'Cloudinary'],
    projectLink: 'https://chatapp-7249.onrender.com/'
  },
  {
    imgSrc: '/images/E-commerce.jpeg',
    title: 'E-commerce website',
    desc:['•Designed and implemented a scalable backend using Node.js and Express.js, following MVC architecture.', '• Engineered MongoDB database schema for property listings and user data, achieving query response times under 200ms.' ,'• Implemented Google and GitHub OAuth authentication using Passport.js with secure session handling.' ,'• Integrated Geoapify API to display property locations dynamically.' ,'• Used Joi for schema validation and flash messages for error handling.' ,'• Integrated Multer for seamless image uploads and storage.' ,'• Built a fully responsive UI using React for a smooth user experience.'],
    tags: ['API', 'SPA'],
    projectLink: 'https://github.com/devsaxena01'
  },
  {
    imgSrc: '/images/Blog-app.png',
    title: 'Blog app',
    desc:['•Designed and implemented a scalable backend using Node.js and Express.js, following MVC architecture.', '• Engineered MongoDB database schema for property listings and user data, achieving query response times under 200ms.' ,'• Implemented Google and GitHub OAuth authentication using Passport.js with secure session handling.' ,'• Integrated Geoapify API to display property locations dynamically.' ,'• Used Joi for schema validation and flash messages for error handling.' ,'• Integrated Multer for seamless image uploads and storage.' ,'• Built a fully responsive UI using React for a smooth user experience.'],
    tags: ['Development', 'API'],
    projectLink: 'https://github.com/devsaxena01'
  },
  {
    imgSrc: '/images/download.jpg',
    title: 'Portfolio',
    desc:['•Designed and implemented a scalable backend using Node.js and Express.js, following MVC architecture.', '• Engineered MongoDB database schema for property listings and user data, achieving query response times under 200ms.' ,'• Implemented Google and GitHub OAuth authentication using Passport.js with secure session handling.' ,'• Integrated Geoapify API to display property locations dynamically.' ,'• Used Joi for schema validation and flash messages for error handling.' ,'• Integrated Multer for seamless image uploads and storage.' ,'• Built a fully responsive UI using React for a smooth user experience.'],
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/devsaxena01'
  },
  {
    imgSrc: '/images/download.jpg',
    title: 'eCommerce website',
    desc:['•Designed and implemented a scalable backend using Node.js and Express.js, following MVC architecture.', '• Engineered MongoDB database schema for property listings and user data, achieving query response times under 200ms.' ,'• Implemented Google and GitHub OAuth authentication using Passport.js with secure session handling.' ,'• Integrated Geoapify API to display property locations dynamically.' ,'• Used Joi for schema validation and flash messages for error handling.' ,'• Integrated Multer for seamless image uploads and storage.' ,'• Built a fully responsive UI using React for a smooth user experience.'],
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/devsaxena01'
  },
  {
    imgSrc: '/images/download.jpg',
    title: 'vCard Personal portfolio',
    desc:['•Designed and implemented a scalable backend using Node.js and Express.js, following MVC architecture.', '• Engineered MongoDB database schema for property listings and user data, achieving query response times under 200ms.' ,'• Implemented Google and GitHub OAuth authentication using Passport.js with secure session handling.' ,'• Integrated Geoapify API to display property locations dynamically.' ,'• Used Joi for schema validation and flash messages for error handling.' ,'• Integrated Multer for seamless image uploads and storage.' ,'• Built a fully responsive UI using React for a smooth user experience.'],
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/devsaxena01'
  },
];

const Projects = () => {
  return (
    <section id='projects' className='section'>
        <div className='container'>
            <h2 className='headline-2 mb-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600  drop-shadow-xl'>
                My portfolio highlights
            </h2>
            <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
                {
                    projects.map(({imgSrc,title,desc,tags,projectLink},key) => (
                        <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        desc={desc}
                        tags={tags}
                        projectLink={projectLink}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Projects