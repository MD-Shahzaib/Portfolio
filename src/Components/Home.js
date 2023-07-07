import React from 'react'
import AnimatedTyping from './TypingEffect'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font" id='home'>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="font-medium text-white mb-2">
                        <div className='text-xl'>Hi, I'm</div>
                        <div className='sm:text-4xl text-3xl font-normal'>Muhammad Shahzaib</div>
                    </div>
                    <p className="mb-8 leading-relaxed">A passionate <AnimatedTyping /><br /> with a solid background in developing full-stack web applications and expertise in designing databases and user interfaces, My proficiency in technologies like Node.js, Express.js, MongoDB, React.js, JavaScript, React Native and some other cool libraries and frameworks.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                            <Link to="contact" className="btn btn-primary abt-btn m-lr-2" offset={10} smooth={true} duration={1000}>Contact Me</Link>
                        </button>
                        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            <a href="https://drive.google.com/file/d/1H6C_-Gzp7UOMUTnMXxSD3f_vkiQru7ZW/view?usp=drive_link" target='_blank'>Resume</a>
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={require('./../Images/home.jpg')} />
                </div>
            </div>
        </section>
    )
}

export default Home;