import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-black flex justify-center w-full items-center py-24" id="mobile-menu-2">
            <ul className="flex space-x-3">
                <li>
                    <a href="#" className="block mt-1 text-white dark:text-white">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="#" className="block mt-1 text-white dark:text-white">
                        <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="#" className="block mt-1 text-white dark:text-white">
                        <AiOutlineMail />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;