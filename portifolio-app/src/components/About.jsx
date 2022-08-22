import React from 'react';
import EuFoto from '../assets/Eufoto.jpeg';

const About = () => {
    return (
        <div name='sobre' className='w-full sm:h-screen text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
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
                        <p>
                            21/02/2000 nasceu em Minas Gerais uma grande história.
                        </p>
                        <img className='flex py-4' src={EuFoto} alt='/'></img>
                    </div>
                    <div>
                        <p>
                            Durante minha infância, passei por muita dificuldade trabalhando na roça com meu pai, em São João da Serra Negra - MG. Aos 11 e aos 12 eu já estava em dois empregos: na roça com meu pai e um faz tudo em um mercado local. E, dessa forma, segui por muitos anos.

                            <br />
                            <br />


                            Abandonei a escola para ter mais tempo no apoio ao meu pai. Até que, aos 15 anos, decidi mudar de vida, consciente que a vida que eu levava, até o momento, não era pra mim. Com o objetivo de mudança na cabeça, fui morar com minha mãe em Brasília-DF e passei a me dedicar de corpo e alma aos estudos.

                            <br />
                            <br />

                            Hoje, cursando Ciência da Computação, trabalho como Desenvolvedor de software e tenho mais de mil horas de cursos certificados.

                            <br />
                            <br />

                            Sou apaixonado pelo que faço e trabalho com excelência na produção de softwares, sempre com o intuito de melhorar a vida das pessoas ao meu redor. Sou especialista em criação de softwares para clientes que vão desde pessoas físicas e pequenas empresas, até grandes corporações empresariais. O que você faria se tivesse um especialista em software disponível ao seu alcance?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;