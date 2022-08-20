import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Laravel from '../assets/laravel.png';
import GitLab from '../assets/gitlab.png';
import PHP from '../assets/php.png';
import BD from '../assets/bd.png';

const Skills = () => {
    return (
        <div name="ferramentas" className='w-full h-screen text-white'>

            {/* Container */}

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00df9a] '>Ferramentas</p>
                    <p className='py-4'>Essas são as tecnologias com as quais eu trabalho.</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-orange-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="Icone HTML" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-orange-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="Icone CSS" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-orange-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="Icone JavaScript" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-orange-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={PHP} alt="Icone PHP" />
                        <p className='my-4'>PHP</p>
                    </div>
                    <div className='shadow-md shadow-orange-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="Icone React" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-orange-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Laravel} alt="Icone Laravel" />
                        <p className='my-4'>Laravel</p>
                    </div>
                    <div className='shadow-md shadow-orange-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="Icone Node" />
                        <p className='my-4'>Node</p>
                    </div>
                    <div className='shadow-md shadow-orange-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="Icone Tailwind" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-orange-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={BD} alt="Icone BD" />
                        <p className='my-4'>BD</p>
                    </div>
                    <div className='shadow-md shadow-orange-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="Icone GitHub" />
                        <p className='my-4'>GitHub</p>
                    </div>
                    <div className='shadow-md shadow-orange-200 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitLab} alt="Icone GitLab" />
                        <p className='my-4'>GitLab</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;