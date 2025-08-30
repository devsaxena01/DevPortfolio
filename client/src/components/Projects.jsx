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
    imgSrc: '/images/ai-finance-tracker.jpg',
    title: 'AI Finance Tracker',
    desc:['•Designed and implemented a scalable backend using Node.js and Express.js, following MVC architecture.', '• Engineered MongoDB database schema for property listings and user data, achieving query response times under 200ms.' ,'• Implemented Google and GitHub OAuth authentication using Passport.js with secure session handling.' ,'• Integrated Geoapify API to display property locations dynamically.' ,'• Used Joi for schema validation and flash messages for error handling.' ,'• Integrated Multer for seamless image uploads and storage.' ,'• Built a fully responsive UI using React for a smooth user experience.'],
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/devsaxena01'
  },
  {
    imgSrc: '/images/blog-app.png',
    title: 'Blog app',
    desc:['•Designed and implemented a scalable backend using Node.js and Express.js, following MVC architecture.', '• Engineered MongoDB database schema for property listings and user data, achieving query response times under 200ms.' ,'• Implemented Google and GitHub OAuth authentication using Passport.js with secure session handling.' ,'• Integrated Geoapify API to display property locations dynamically.' ,'• Used Joi for schema validation and flash messages for error handling.' ,'• Integrated Multer for seamless image uploads and storage.' ,'• Built a fully responsive UI using React for a smooth user experience.'],
    tags: ['Development', 'API'],
    projectLink: 'https://github.com/devsaxena01'
  },
  {
    imgSrc: '/images/todo-app.png',
    title: 'TODO App',
    desc:['• Built a task management application with features to add, edit, delete, and mark tasks as completed.', '• Designed a responsive UI using Tailwind CSS, ensuring seamless usability across mobile, tablet, and desktop.' ,'• Implemented state management in React.js for real-time task updates and optimized performance.' ,'• Enhanced user productivity by providing a clean and intuitive interface for managing daily tasks.' ,'• Focused on performance optimization and best practices in React for smooth user experience.'],
    tags: ['ReactJS', 'Tailwind CSS'],
    projectLink: 'https://todo-app-sksd.onrender.com/'
  },
    {
    imgSrc: '/images/portfolio.png',
    title: 'Personal Portfolio Website',
    desc:['• Designed and developed a responsive personal portfolio website using React.js and Tailwind CSS, optimized for cross-device compatibility.', '• Showcased projects and skills with a modern UI/UX design for enhanced user engagement.' ,'• Integrated contact form functionality with Getform for seamless message handling and submissions.' ,'• Implemented performance optimization techniques in React to ensure fast loading and smooth navigation.' ,'• Deployed a fully functional, mobile-friendly website to highlight professional work and achievements.'],
    tags: ['ReactJS', 'TailwindCSS' , 'Getform'],
    projectLink: 'https://github.com/devsaxena01/DevPortfolio'
  }
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