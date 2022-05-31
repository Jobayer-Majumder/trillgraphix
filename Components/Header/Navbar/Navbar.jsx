import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    const { route } = useRouter();


    return (
        <nav className="bg-opacity-20 backdrop-blur-md py-10 px-40 rounded fixed w-full">
            <div className="grid grid-cols-3 md:grid-cols-2 justify-between items-center mx-auto">
                <div className="col-span-1">
                    <Link href="/" className="">
                        <img style={{ height: '20px' }} src="https://images.squarespace-cdn.com/content/v1/6181566fb79b7919a2b9943f/b08b5a78-ab50-4658-8b2f-ecb43f89b1ee/Layer+1.png?format=1500w" className="" alt="Flowbite Logo" />
                    </Link>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={`hidden md:flex md:justify-end ${route === '/clothing_design' ? 'text-black' : 'text-white' } w-full items-center`} id="mobile-menu-2">
                        <ul className="flex space-x-8">
                            <li className='relative'>
                                <a href="#" className=" dark:text-white" aria-current="page">Portfolio</a>
                                {/* <div className="absolute top-10 space-y-2 text-right">
                                    <li>
                                        <a href="#" className="text-white dark:text-white" aria-current="page">Cover art</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white dark:text-white" aria-current="page">animation</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white dark:text-white" aria-current="page">clothing design</a>
                                    </li>
                                </div> */}
                            </li>
                            <li>
                                <a href="#" className="block">Clientele</a>
                            </li>
                            <li>
                                <a href="#" className="block">inquire</a>
                            </li>
                            <li>
                                <a href="#" className="block mt-1">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block mt-1">
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block mt-1">
                                    <AiOutlineMail />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>

    );
};

export default Navbar;