import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { HashLink } from 'react-router-hash-link';

import LogoImg from './LogoImg';
function Header({ headerRef }) {
    const [navToggle, setNavToggle] = useState()
    return (
        <nav ref={headerRef} className="header lg:!bg-transparent">
            <div className="flex flex-wrap items-center justify-between px-5 lg:px-10 z-[1] relative header_top">
                <ul className="space-x-5 hidden lg:flex">
                    <li>
                        <HashLink smooth to='/#intro' name="intro" className="nav-item active">Home</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to='/#about' name="about" className="nav-item">About</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to='/#features' name="features" className="nav-item">Features</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to='/#contact_us' name="contact_us" className="nav-item">Contact Us</HashLink>
                    </li>
                </ul>
                <ul className="space-x-8 hidden lg:flex">
                    <li className="media_icon">
                        <a href='https://www.instagram.com/bridgeaiuk?igsh=aDJmY3JnanZ2NTdn' target='_blank'><FaInstagram /></a>
                    </li>
                    <li className="media_icon">
                        <a href='https://www.youtube.com/@Bridge-AI' target='_blank'><FaLinkedinIn /></a>
                    </li>
                    {/* <li className="media_icon">
                        <FaFacebookF />
                    </li> */}
                    <li className="media_icon">
                        <a href='https://www.linkedin.com/company/bridge-ai-uk/' target='_blank'><FaYoutube /></a>
                    </li>
                </ul>
                <button className="ml-auto p-1 text-sm rounded-lg lg:hidden bg-active" type="button" onClick={() => setNavToggle(!navToggle)}>
                    <BsList className='text-4xl' />
                </button>
                <div className={`${navToggle ? "" : "hidden"}  lg:hidden w-full`}>
                    <ul className="flex flex-col space-y-2 my-4 rounded-lg bg-transparent">
                        <li>
                            <HashLink smooth to='/#intro' name="intro_mobile" className="nav-item w-full active">Home</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to='/#about' name="about_mobile" className="nav-item">About</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to='/#features' name="features_mobile" className="nav-item">Features</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to='/#contact_us' name="contact_us_mobile" className="nav-item">Contact Us</HashLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col items-center z-0 relative header_bottom'>
                <div className='logo-container'>
                    <hr className='line-left' />
                    {/* <img src={logo} /> */}
                    <LogoImg />
                    <hr className='line-right' />
                </div>
                <span className='company_name'>
                    BRIDGE
                </span>
            </div>
        </nav>
    )
}

export default Header