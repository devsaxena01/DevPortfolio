import React from 'react'

const educationData = [
  {
    title: 'Leetcode',
    description: ['Solved 450+ Problems on Leetcode with Max Rating 1482+'],
    links: 'https://leetcode.com/u/devsaxena7668/',
  },
  {
    title: 'Codechef',
    description: ['2* on Codechef with Max Rating 1405+'],
    links: 'https://www.codechef.com/users/saxenadev7668',
  },
  {
    title: 'Codeforces',
    description: ['Newbie on Codeforces Max Rating 937+'],
    links: 'https://codeforces.com/profile/devsaxena01',
  },
  {
    title: 'GeeksforGeeks',
    description: ['Solved 450+ Problems on GeeksforGeeks with Max Rating 1575+'],
    links: 'https://www.geeksforgeeks.org/user/devsaxena7668/',
  },
  {
    title: 'Github',
    description: ['Built more than 25+ projects on github using HTML , CSS ,JavaScript and MERN'],
    links: 'https://github.com/devsaxena01',
  },
  {
    title: 'Certifications',
    description: ['• Completion Certificate: Postman API Fundamentals Student Expert.'],
    links: 'https://drive.google.com/file/d/1i0dLX8_AdiXq2DO3dHA6JdCX4YzxTIyB/view',
  },
    {
    title: 'Certifications',
    description: ['• Completion Certificate: Earned a certificate of Completion in ”160 days of problem solving challenge by GeeksforGeeks” '],
    links: 'https://drive.google.com/file/d/1d8twuc5-5iP_wZvcN88SqabkrofZwlDZ/view?usp=drivesdk',
  },
  {
    title: 'Certifications',
    description: ['• Completion Certificate: Earned a certificate of Completion in ”software Engineering Job Simulation” '],
    links: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_t6hYPPAqkt3LxEQa2_1744291444384_completion_certificate.pdf',
  },
  {
    title: 'Certifications',
    description: ['• Completion Certificate: Earned a certificate of completion in ”Introduction to Technology Apprenticeship Job Simulation” '],
    links: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20UK/EzKFRQ2oEA87PPjsL_Accenture%20UK_t6hYPPAqkt3LxEQa2_1713941017250_completion_certificate.pdf',
  },
  {
    title: 'Certifications',
    description: ['• Participation Certificate: Earned a certificate of participation in the Vultr Cloud Innovate Hackathon 2024'],
    links: 'https://drive.google.com/file/d/1y8z4feCphoMil1A5zJAgxTsVDiYRUL4T/view?usp=drivesdk',
  },
];

const Achievements = () => {
  return (
    <section id='achievements' className='section'>
      <div className='container'>
        <h2 className="text-4xl md:text-4xl font-bold text-center text-indigo-600 mb-2">Achievements</h2>
        <h2 className="text-xl md:text-xl text-center text-zinc-300 mb-1">Recognitions and accomplishments</h2>
        <div className="max-w-4xl mt-6 mx-auto space-y-8">
        {educationData.map(({title , description , links}, key) => (
          <div
            key={key}
            className="bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-indigo-700">{title}</h3>

            <div className='mt-2 flex flex-wrap items-center gap-4'>
                    {description.map((label , key) =>(
                        <span 
                        key={key}
                        className=' mt-2 text-sm grid items-center  rounded-lg font-medium text-gray-300 dark:text-gray-300'>
                            {label}
                         </span>
                    ))}
                </div>

            {/* <p className=" mt-1 text-md font-medium text-gray-700 dark:text-gray-300">{description}</p> */}
            <a 
            href={links}
            >
                <button className='px-6 py-2 mt-6 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out'>View</button>
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Achievements