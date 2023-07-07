import React from 'react'
import { social } from '../Data';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link to='home' offset={-80} duration={1000} smooth={true} className="flex title-font font-medium items-center md:justify-start justify-center text-white cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">MD-Shahzaib</span>
                </Link>
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2023 MD-Shahzaib <span className="text-gray-500 ml-1">All rights reserved.</span></p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    {social.map((item, index) => {
                        return (
                            <a href={item.href} className={`text-gray-400 ${index !== 0 && "ml-3"}`} key={index}>{item.icon}</a>
                        )
                    })}
                </span>
            </div>
        </footer>
    )
}

export default Footer;