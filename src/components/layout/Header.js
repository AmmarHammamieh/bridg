import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import LogoImg from './LogoImg';
function Header({ headerRef }) {
    const [navToggle, setNavToggle] = useState()
    return (
        <nav ref={headerRef} className="header">
            <div className="flex flex-wrap items-center justify-between px-5 z-[1] relative">
                <ul className="space-x-10 hidden lg:flex">
                    <li>
                        <NavLink to="/" className="nav-item">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="nav-item">About</NavLink>
                    </li>
                    <li>
                        <a className="nav-item" href="#">Features</a>
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
                            <NavLink to="/" className="nav-item w-full" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="nav-item">About</NavLink>
                        </li>
                        <li>
                            <a href="#" className="nav-item">Features</a>
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