import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-black'>

            {/* Container */}

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='font-bold text-[#00df9a]'>Olá, meu nome é</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Adriano Cruz</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Desenvolvedor
                    <Typed
                        className='md:text-7xl m:text-7xl md:pl-4 pl-2 text-[#00df9a]'
                        strings={["Back-end", "Front-end", "Full Stack"]}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Sou desenvolvedor Front-end e Back-end especializado em construir (e ocasionalmente projetar) experiências digitais excepcionais. Atualmente, estou focado na construção de aplicações web full stack de responsividade e servidores lincados com banco de dados.</p>
                <div>
                    <button className='border-2 group px-6 py-3 my-2 flex items-center hover:bg-[#00df9a] hover:border-[#00df9a] text-white'>

                        <Link to="sobre" spy={true} smooth={true} duration={500}>
                            Saiba mais
                        </Link>

                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-4' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;