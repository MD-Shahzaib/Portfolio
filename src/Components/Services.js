import React from 'react'
import { services } from '../Data';
import { Link } from 'react-scroll';

const Services = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font" id='services'>
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-blue-400 tracking-widest font-medium title-font mb-1">MY SERVICES</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Services Offered: Full-Stack Development</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {services.map((item, index) => {
                        return (
                            <div className="p-4 md:w-1/3" key={index}>
                                <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">{item.icon}</div>
                                        <h2 className="text-white text-lg title-font font-medium">{item.name}</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base">{item.description}</p>
                                        <Link to="contact" className="mt-3 text-blue-400 inline-flex items-center cursor-pointer" offset={-40} smooth={true}>
                                            Learn More
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
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

export default Services;