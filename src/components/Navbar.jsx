import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
    const handleClick = () => setNav(!nav)

    useEffect(() => {
        if (nav) {
            document.body.classList.add('nav-open')
        } else {
            document.body.classList.remove('nav-open')
        }
    }, [nav])

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#121212] text-gray-300 z-20'>
            <div>
                <h1 className='text-xl text-[#BB86FC]'>lukemcd.dev</h1>
            </div>
            { /* menu */}
            <ul className='hidden md:flex'>
                <li><Link to="home" smooth={true} duration={500}> Home </Link></li>
                <li><Link to="skills" smooth={true} duration={500}> Skills </Link></li>
                <li><Link to="work" smooth={true} duration={500}> Work </Link></li>
                <li><Link to="contact" smooth={true} duration={500}> Contact </Link></li>
            </ul>
            { /* menu icon */}
            <div onClick={handleClick} className='md:hidden z-30'>
                {nav ? <FaTimes className='text-2xl'/> : <FaBars className='text-2xl'/>}
            </div>

            { /* mobile menu*/}
            <ul className={`${!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#121212] flex flex-col justify-center items-center opacity-95 z-20'}`}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}> Home </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}> Skills </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}> Work </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}> Contact </Link></li>
            </ul>

            { /* social icon */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-10'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href='https://www.linkedin.com/in/mcdougallluke/'>
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href='https://github.com/mcdougallluke'>
                            Github <FaGithub size={30}/>
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6FC2B0]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href='mailto:luke.e.mcdougall@gmail.com'>
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href='resume.pdf'
                        target='_blank' 
                        rel='noopener noreferrer'
                        >
                            Resume <BsFillPersonFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
