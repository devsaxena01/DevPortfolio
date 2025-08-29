import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen,setNavOpen] = useState(false);
  return (
    <>
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-slate-900'>
    <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]'>
    <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-rose-400 to-orange-300 animate-pulse drop-shadow-md">
      Dev Saxena
        {/* <a href='/' className='logo'>
        <img src='./images/download.jpg' 
        width={40} height={40} alt='Dev '/>
        </a> */}
    </h1>
    <div className='relative md:justify-self-center'>
    <button className='menu-btn md:hidden' 
    onClick={()=> setNavOpen((prev)=> !prev)}
    >
    <span className='material-symbols-rounded'>
      {navOpen ? 'close' : 'menu'}
    </span>
    </button>
    <Navbar navOpen = {navOpen}/>
    </div>
    <a 
    href="#contact" 
    className="btn btn-secondary max-md:hidden md:justify-self-end"
    >
    contact me
    </a>
    </div>
    </header>
    </>
  )
}

export default Header