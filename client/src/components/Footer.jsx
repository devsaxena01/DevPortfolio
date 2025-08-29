import React from 'react'
import { ButtonOutline, ButtonPrimary } from './Button'

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Education',
    href: '#education'
  },
  {
    label: 'Skills',
    href: '#skills'
  },
  {
    label: 'Projects',
    href: '#projects'
  },
  {
    label: 'Achievements',
    href: '#achievements'
  },
  {
    label: 'Contact',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/devsaxena01'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dev-saxena-430614294/'
  },
  {
    label: 'Twitter X',
    href: ''
  },
  {
    label: 'Instagram',
    href: ''
  }
];

const Footer = () => {
  return (
    <footer className='mt-16'>
        <div className='container'>

            <div className='lg:grid lg:grid-cols-2'>

                <div className='mb-10'>
                    <h2 className='headline-1 mb-8 lg:max-w-[12ch] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-300 to-indigo-300  drop-shadow'>
                        Let&apos;s work together today!
                    </h2>

                    <ButtonPrimary
                    href="mailto:moneyheist6587@gmail.com"
                    label="start project"
                    icon="chevron_right"
                    />
                </div>

                <div className='grid grid-cols-2 gap-4 lg:pl-20'>

                    <div>
                        <p className='mb-2'>Sitemap</p>

                        <ul>
                            {
                                sitemap.map(({label , href} , key) =>(
                                    <li key={key}>
                                        <a 
                                        href={href} className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'>
                                            {label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <p className='mb-2'>Socials</p>

                        <ul>
                            {
                                socials.map(({label , href} , key) =>(
                                    <li key={key}>
                                        <a 
                                        href={href} target='_blank'
                                        className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'>
                                            {label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>

            </div>

            <div className='flex items-center justify-between pt-10 mb-8 '>
                <a 
                href=''
                className=''
                >
                    <img 
                    src="./images/download.jpg" 
                    alt="logo"
                    width={40}
                    height={40}
                     />
                </a>

                <p className='text-zinc-500'>
                    &copy; 2025 <span className='text-zinc-100'>Made with ❤️ by Dev</span>
                </p>

                 <a 
                 className=' bg-slate-800 text-white font-semibold rounded-xl shadow-md hover:bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out'
                    href='#home'>
                    <ButtonPrimary
                    icon="arrow_upward"
                    />
                    </a>

            </div>

        </div>
    </footer>
  )
}

export default Footer