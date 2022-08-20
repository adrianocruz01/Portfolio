import React from 'react';
import ControleDeFinancas from '../assets/controleDeFinanças-img.png';
import GestaoDeFinancas from '../assets/gestaoDeFinanças-img.png';
import MiniInsta from '../assets/miniInsta-img.png';
import SeuCrypto from '../assets/seucrypto-img.png';
import SiteVendasBackend from '../assets/sitevendas-backend-img.png';
import BuscaEco from '../assets/buscaEco-img.png';


const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#00df9a]'>
                        Work
                    </p>
                    <p className='py-6'>Confira alguns dos meus trabalhos recentes</p>
                </div>

                {/* Container */}

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}

                    <div
                        style={{ backgroundImage: `url(${ControleDeFinancas})` }}
                        className='shadow-lg shadow-orange-200 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Efeitos de foco */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                ReactJS & NodeJS
                            </span>
                            <div className='pt-8 text-center'>

                                <a target='_blank' rel="noreferrer" href='https://github.com/emerson-baiano/projeto-controle-financas'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${GestaoDeFinancas})` }}
                        className='shadow-lg shadow-orange-200 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Efeitos de foco */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                ReacjJS & NodeJS
                            </span>
                            <div className='pt-8 text-center'>
                                <a target='_blank' rel="noreferrer" href='https://www.chargemanager.com.br/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Visitar
                                    </button>
                                </a>
                                <a target='_blank' rel="noreferrer" href='https://github.com/Kouamenan/back-integral-m05-desafio-t05'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}

                    <div
                        style={{ backgroundImage: `url(${MiniInsta})` }}
                        className='shadow-lg shadow-orange-200 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Efeitos de foco */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                NodeJS
                            </span>
                            <div className='pt-8 text-center'>

                                <a target='_blank' rel="noreferrer" href='https://github.com/adrianocruz01/mini_insta'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${SeuCrypto})` }}
                        className='shadow-lg shadow-orange-200 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Efeitos de foco */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                ReactJS & TailwindCSS
                            </span>
                            <div className='pt-8 text-center'>
                                <a target='_blank' rel="noreferrer" href='https://seucryptoclube.com/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Visitar
                                    </button>
                                </a>
                                <a target='_blank' rel="noreferrer" href='https://github.com/adrianocruz01/andrei-insta'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}

                    <div
                        style={{ backgroundImage: `url(${SiteVendasBackend})` }}
                        className='shadow-lg shadow-orange-200 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Efeitos de foco */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                NodeJS
                            </span>
                            <div className='pt-8 text-center'>

                                <a target='_blank' rel="noreferrer" href='https://github.com/adrianocruz01/APIcomBancoDeDados'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${BuscaEco})` }}
                        className='shadow-lg shadow-orange-200 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Efeitos de foco */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                ReactJS & NodeJS
                            </span>
                            <div className='pt-8 text-center'>
                                <a target='_blank' rel="noreferrer" href='https://valderyjr.github.io/FrontProvi54/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Visitar
                                    </button>
                                </a>
                                <a target='_blank' rel="noreferrer" href='https://github.com/YasminRamos/hackathon-provi'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;