import React from 'react';

const About = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font" id='about'>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                    <img className="object-cover object-center rounded" alt="hero" src={require('./../Images/about.jpg')} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">About Me</h1>
                    <p className="mb-8 leading-relaxed">I am an experienced full-stack web developer skilled in designing databases, user interfaces, and utilizing technologies like Node.js, Express.js, MongoDB, React.js, and Redux. I am committed to continuous learning and bringing value to any team I join. Additionally, I am open to freelance opportunities to expand my experience in the field.</p>
                </div>
            </div>
        </section>
    )
}

export default About;