import React from 'react'
import { projects } from '../Data';

const Projects = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font" id='projects'>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-blue-400 tracking-widest font-medium title-font mb-1">MY PORTFOLIO</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Portfolio of Innovative Works</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Explore a collection of my engaging and innovative projects, showcasing my expertise in full-stack web development and UI/UX design. From dynamic web applications to intuitive user interfaces.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((item, index) => {
                        return (
                            <div className="lg:w-1/3 sm:w-1/2 p-4" key={index}>
                                <div className="flex relative">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={item.image} />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">{item.category}</h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">{item.title}</h1>
                                        <p className="leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects;