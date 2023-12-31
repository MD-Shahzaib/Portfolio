import React from 'react'
import { navigation } from '../Data';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-20 shadow-xl">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='home' spy={true} offset={-80} duration={1000} smooth={true} className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">MD-Shahzaib</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {navigation.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                spy={true}
                                offset={-80}
                                duration={1000}
                                smooth={true}
                                to={item.href}
                                className="mr-5 hover:text-white cursor-pointer">
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;