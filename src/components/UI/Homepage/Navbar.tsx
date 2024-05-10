import * as React from 'react';
import logo from "@/assets/images/logo/empoerify.png"
import Image from 'next/image';

const Navbar: React.FunctionComponent = (props) => {
    return <header
        className=" bg-center bg-no-repeat bg-cover max-w-screen-2xl mx-auto   py-8"
       
        
    >
        <div
            className="px-12  my-0 mx-auto  flex justify-between items-center text-xl font-medium  rounded-3xl py-5"
        >
             
             <div className='flex items-center text-3xl font-bold text-orange-400'>
             <h3>Empo</h3>
            <Image  className="w-10 h-10 object-cover" src={logo} alt="logo" />
            <h3>werify</h3>
             </div>

            <nav className="hidden md:block md:shadow-none md:bg-transparent     md:order-2 rounded-2xl py-8 px-8 md:py-0 md:px-0  absolute top-16 left-8 md:top-0 md:left-0 md:relative  ">
                <ul className="  md:flex md:flex-row flex-col items-center md:gap-8  md:text-base md:font-normal  md:w-auto   ">
                    <li className="border-b md:border-0 mt-8 md:mt-0 "><a href="#">About</a></li>
                    <li className="border-b md:border-0 mt-8 md:mt-0 "><a href="#">Discover</a></li>
                    <li className="mt-8 md:mt-0 px-7 py-3 rounded-3xl bg-orange-400 text-white font-semibold ">
                        <button>Start Funding</button>
                    </li>
                </ul>
            </nav>

            <button className="flex gap-2 md:hidden order-2">
                <img src="images/icon-close-menu.svg" alt="close-menu icon" className="hidden close-menu"/>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                    <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                </svg>

            </button>
        </div>

        <hr />

        <div>

            <div className='flex items-center text-center  justify-center max-w-5xl mx-auto py-20'>

                <div>

                    <h3 className='text-4xl md:text-5xl py-3 font-semibold tracking-wide leading-relaxed'>Examining Premier Online Fundraising and Crowdfunding Platforms</h3>
                    <p className='leading-relaxed py-5 pt-4 '>Empowerify offers individuals and organizations a platform to raise funds through a network of support from family, friends, acquaintances, businesses, and beyond. Leveraging the power of social media, Empowerify enables users to expand their reach to potential donors, surpassing the limitations of conventional fundraising methods.
               </p>
                    <p> Ensuring your crowdfunding venture starts off on the right foot involves choosing the ideal platform. With empowerify comprehensive list, you can delve into a thorough comparison of top online fundraising platforms, covering essential aspects like fees, features, customer support, and more, empowering you to make an informed choice</p>
                </div>

            </div>
        </div>
    </header>;
};

export default Navbar;
