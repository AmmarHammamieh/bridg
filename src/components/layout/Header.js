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
            <div className="flex flex-wrap items-center justify-between px-5 z-[1] relative">
                <ul className="space-x-10 hidden lg:flex">
                    <li>
                        <HashLink smooth to='/#intro' name="intro" className="nav-item active">Home</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to='/#about' name="about" className="nav-item">About</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to='/#features' name="features" className="nav-item">Features</HashLink>
                    </li>
                </ul>
                <ul className="space-x-6 hidden lg:flex">
                    <li className="media_icon">
                        <FaInstagram />
                    </li>
                    <li className="media_icon">
                        <FaLinkedinIn />
                    </li>
                    <li className="media_icon">
                        <FaFacebookF />
                    </li>
                    <li className="media_icon">
                        <FaYoutube />
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
                    </ul>
                </div>
            </div>
            <div className='flex flex-col items-center z-0 relative'>
                <div className='logo-container'>
                    <hr className='line-left' />
                    {/* <img src={logo} /> */}
                    <LogoImg />
                    <hr className='line-right' />
                </div>
                <span className='company_name'>
                    BRIDG
                </span>
            </div>
        </nav>
    )
}

export default Header