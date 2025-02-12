import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/LogoAdriano.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300'>

            {/* Logo */}
            <div>
                <img src={Logo} alt="Logo imagem" style={{ width: '150px' }} />
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" spy={true} smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="sobre" spy={true} smooth={true} duration={500}>
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link to="ferramentas" spy={true} smooth={true} duration={500}>
                        Ferramentas
                    </Link>
                </li>
                <li>
                    <Link to="work" spy={true} smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contato" spy={true} smooth={true} duration={500}>
                        Contato
                    </Link>
                </li>
            </ul>


            {/* Hamburguer */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Menu Celular */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <li>
                        <Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="sobre" spy={true} smooth={true} duration={500}>
                        Sobre
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="ferramentas" spy={true} smooth={true} duration={500}>
                        Ferramentas
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" spy={true} smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contato" spy={true} smooth={true} duration={500}>
                        Contato
                    </Link>
                </li>
            </ul>

            {/* Icones Redes Sociais */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/adrianocruz01/'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            target='_blank' rel="noreferrer" href='https://github.com/adrianocruz01'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            target='_blank' rel="noreferrer" href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqXPnxDczGMdjllDTHWHCcgQvndkbZrJrncrfNmFjPGRDzCFCzBWsCGLcnJxXjSDFCcbjB'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            target='_blank' href='/'>
                            Currículo <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;