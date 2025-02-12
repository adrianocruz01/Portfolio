import React from 'react'

const Contact = () => {
    return (
        <div name='contato' className='w-full h-screen flex justify-center items-center p-4'>
            <form method='POST' action='https://getform.io/f/d54a35a1-0442-4e2d-a697-be97ed5319ec' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00df9a] text-white'>Contato</p>
                    <p className='py-4 text-white'>Envie o formulário abaixo ou me envie um e-mail adrianocruz.reis@gmail.com</p>
                </div>
                <input className='p-2 bg-[#ccd6f6]' type='text' placeholder='Nome' name='Nome' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='Email' />
                <textarea className='p-2 bg-[#ccd6f6]' name='message' rows='10' placeholder='Mensagem' />
                <button className='px-10 py-3 my-8 mx-auto flex items-center hover:bg-[#00df9a] hover:border-[#00df9a] border-2 text-white'>Enviar</button>
            </form>
        </div>
    );
}

export default Contact;