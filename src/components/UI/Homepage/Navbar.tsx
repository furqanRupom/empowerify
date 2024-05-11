"use client";
import * as React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons from react-icons library
import logo from "@/assets/images/logo/empoerify.png";
import Image from 'next/image';

const Navbar: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-center bg-gray-50 bg-no-repeat bg-cover max-w-screen-2xl mx-auto ">
            <div className="px-12 my-0 mx-auto flex justify-between items-center text-xl font-medium rounded-3xl py-5">
                <div className='flex items-center text-3xl font-bold text-orange-400'>
                    <h3>Empo</h3>
                    <Image className="w-10 h-10 object-cover" src={logo} alt="logo" />
                    <h3>werify</h3>
                </div>

                <nav className={`md:block md:shadow-none bg-gray-50 md:bg-transparent md:order-2 rounded-2xl py-8 px-8 md:py-0 md:px-0 absolute top-24 right-0 left-0 md:top-0 md:left-0 md:relative ${isOpen ? '-translate-x-0 lg:-translate-x-0 duration-200 lg:duration-0' : '-translate-x-full lg:-translate-x-0 duration-200 lg:duration-0'}`}>
                    <ul className="md:flex md:flex-row flex-col items-center md:gap-8 md:text-base md:font-normal md:w-auto">
                        <li className="border-b md:border-0 mt-8 md:mt-0 py-1 lg:py-0"><a href="#">About</a></li>
                        <li className="border-b md:border-0 mt-8 md:mt-0 py-1 lg:py-0"><a href="#">Discover</a></li>
                        <li className="mt-8 md:mt-0 px-7 py-3 rounded-3xl bg-orange-400 text-white font-semibold text-center hover:bg-orange-500">
                            <button>Start Funding</button>
                        </li>
                    </ul>
                </nav>

                <button className="flex gap-2 md:hidden order-2" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <hr />
        </header>
    );
};

export default Navbar;
