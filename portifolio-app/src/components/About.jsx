import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-[700px] bg-black text-gray-300'>
            <div className='flex flex-col justify-center items-center md:w-full md:h-[500px]'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#00df9a]'>
                            Sobre
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-3xl font-bold'>
                        <p>Atualmente, estou cursando Ciência da Computação pela faculdade Descomplica. Tenho +1000 horas de cursos com certificados.</p>
                    </div>
                    <div>
                        <p>
                            Sou apaixonado por construir softwares excelentes que melhorem
                            a vida das pessoas ao meu redor. Eu me especializei na criação de software
                            para clientes que vão desde pessoas físicas e pequenas empresas, todos os
                            caminho para grandes corporações empresariais. O que você faria se tivesse
                            um especialista em software disponível ao seu alcance?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;