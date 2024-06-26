"use client";
import * as React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "@/assets/images/logo/empoerify.png";
import Image from 'next/image';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [widthFull,setWidthFull] = useState<boolean>(false);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        if(latest > 0){
            setWidthFull(true);
        }else{
            setWidthFull(false);
        }
    })

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex items-center justify-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full mx-auto'>
            <motion.header
                className={`fixed top-0 z-50  bg-white shadow-md mx-auto transition-all duration-300 p-5 py-4 ${widthFull ? "w-full my-0 " : "w-full lg:w-[70rem] my-5  rounded-3xl backdrop-blur-3xl bg-transparent "}`}

            >
                <div className="container mx-auto flex justify-between  items-center  max-w-5xl ">
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-800 hover:text-orange-400">Home</Link>
                        <Link href="#" className="text-gray-800 hover:text-orange-400">About</Link>
                        <Link href="#" className="text-gray-800 hover:text-orange-400">Contact</Link>
                    </nav>
                    <div >

                  <div className='relative pt-2'>
                            <svg className='mx-auto absolute inset-0 -top-3' fill="#fb923c" width="40px" height="40px" viewBox="-2.4 -2.4 28.80 28.80" role="img" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"><path d="M9.887 4.242c-.38 0-.407.003-.616.106a1.518 1.518 0 0 0-.792 1.037c-.05.259-.046 7.361.003 7.593.113.527.52.96 1.037 1.1.746.205 1.511-.225 1.746-.977.06-.192.063-.365.063-3.94 0-3.627-.003-3.743-.066-3.945a1.401 1.401 0 0 0-.782-.881c-.179-.086-.228-.093-.593-.093zm4.241 1.378c-.915-.006-1.623.874-1.392 1.77.077.28.203.493.421.695.225.209.504.351.755.381.637.076 1.226-.229 1.505-.782.457-.907-.173-1.988-1.2-2.06a1.335 1.335 0 0 0-.089-.003zm4.241.01c-.192 0-.383.027-.514.08-.378.149-.693.47-.835.851l-.076.199v3.876c0 4.356-.017 4.071.252 4.648.39.851 1.192 1.477 2.077 1.63.086.013.954.023 1.928.023l1.772-.007.225-.106a1.65 1.65 0 0 0 .706-.69c.09-.188.096-.221.096-.612 0-.388-.007-.427-.093-.603a1.498 1.498 0 0 0-.679-.68l-.252-.125-1.427-.017c-1.567-.016-1.528-.013-1.663-.222-.057-.082-.06-.318-.077-3.62l-.016-3.529-.076-.182a1.516 1.516 0 0 0-.825-.831 1.496 1.496 0 0 0-.523-.083zM5.685 7.033a1.43 1.43 0 0 0-1.449 1.251c-.014.13-.027 1.097-.03 2.154 0 1.869-.003 1.925-.066 2.03-.123.203-.156.206-1.6.206-1.405 0-1.465.007-1.82.186-.214.11-.47.38-.599.64-.096.195-.106.251-.116.562-.013.318-.007.365.083.58.166.414.57.759 1.02.868.123.033.59.04 1.872.033 1.633-.007 1.716-.01 1.958-.08.858-.244 1.494-.768 1.872-1.546.278-.574.278-.557.278-3.287 0-2.22-.003-2.401-.06-2.584a1.44 1.44 0 0 0-1.343-1.013zm8.406 2.826a1.47 1.47 0 0 0-.622.158c-.342.17-.656.58-.746.971-.023.09-.036.924-.036 2.167 0 1.944-.003 2.024-.067 2.126-.125.21-.132.21-1.513.21-.69 0-1.339.012-1.445.032-.762.123-1.318.888-1.186 1.627.05.288.216.61.411.802.179.172.341.268.62.357.168.057.32.06 1.92.053 1.982-.01 1.982-.01 2.568-.304.57-.285.988-.71 1.276-1.292.298-.6.298-.587.298-3.32 0-2.22-.003-2.369-.063-2.557a1.441 1.441 0 0 0-1.415-1.03zm2.843 7.06a1.406 1.406 0 0 0-1.269.807c-.11.226-.113.242-.113.63 0 .384.003.404.11.606.189.361.407.563.798.725.162.067.232.077.533.07.322-.01.368-.02.58-.123.653-.32.97-1.06.746-1.729a1.427 1.427 0 0 0-1.385-.986z"></path></g>
                            </svg>
                            <h3 className='font-baloo text-orange-400 font-extrabold text-2xl '>Empowerify</h3>
                             

                  </div>



                    </div>
                    <div className="hidden md:flex items-center space-x-5">
                        <Link className='text-gray-800 hover:text-orange-500' href="/">How it Works</Link>
                        <button className="text-gray-800 hover:text-orange-500">Sign Up</button>
                        <button className={` px-4 py-2    border border-orange-500 rounded-3xl ${widthFull ? 'bg-orange-500 text-white hover:bg-white hover:text-orange-500 duration-500' : 'text-orange-500 bg-white hover:bg-orange-500 duration-500 hover:text-white'}`}>Start Funding</button>
                    </div>
                    <button className="md:hidden text-3xl text-orange-400" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>



                {isOpen && (
                    <div className={`md:hidden  flex flex-col items-center py-4 space-y-4 ${widthFull ? 'bg-white' : 'backdrop-blur-2xl'}`}>
                        <Link href="#" className="text-gray-800 hover:text-orange-400">Home</Link>
                        <Link href="#" className="text-gray-800 hover:text-orange-400">About</Link>
                        <Link href="#" className="text-gray-800 hover:text-orange-400">Contact</Link>
                        <button className="text-gray-800 hover:text-orange-400">Sign Up</button>
                        <button className="bg-orange-400 text-white px-4 py-2  hover:bg-orange-500 rounded-3xl">Start Funding</button>
                    </div>
                )}
            </motion.header>
        </div>
    );
};

export default Navbar;
