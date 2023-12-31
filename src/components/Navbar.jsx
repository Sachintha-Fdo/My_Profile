import React,{useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub, FaResearchgate, FaWhatsapp, FaMailBulk, FaMailchimp} from 'react-icons/fa';
import Logo from '../images/logo.png'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonaLinesFill} from 'react-icons/bs'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#040114]'>
        <div>
          <img src={Logo} alt='Logo Image' style={{width:'160px'}}/>
        </div>
        
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Publications</li>
            <li>Certificates & Documents</li>
            <li>Contact</li>
          </ul>
        
        <div onClick={handleClick} className='hidden:md z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        <ul  className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#030c1a] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Publications</li>
            <li className='py-6 text-4xl'>Certificates & Documents</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="/">
                Linkedin <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-green-500'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="/">
                ResearchGate <FaResearchgate size={30}/>
              </a>
            </li>
            <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="/">
                GitHub <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="/">
                Whatsapp <FaWhatsapp size={30}/>
              </a>
            </li>
            <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="/">
                Mail <HiOutlineMail size={30}/>
              </a>
            </li>
          </ul>
        </div>
    </div>
  );
 
};
export default Navbar;
