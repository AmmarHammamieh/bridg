import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import logo from '../assets/images/logo.webp';
function Header() {
    return (
        <nav className="header">
            <div className="flex flex-wrap items-center justify-between px-5">
                <ul className="space-x-10 hidden lg:flex">
                    <li>
                        <a className="nav-item active" href="#">Home</a>
                    </li>
                    <li>
                        <a className="nav-item" href="#">About</a>
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
                <button className="ml-auto p-1 text-sm rounded-lg lg:hidden bg-active" data-collapse-toggle="navbar-hamburger" type="button" aria-controls="navbar-hamburger" aria-expanded="false">
                    <BsList className='text-4xl' />
                </button>
                <div className="hidden lg:hidden w-full" id="navbar-hamburger">
                    <ul className="flex flex-col space-y-2 my-4 rounded-lg bg-transparent">
                        <li>
                            <a href="#" className="nav-item active w-full" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="nav-item">Services</a>
                        </li>
                        <li>
                            <a href="#" className="nav-item">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="nav-item">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='logo-container'>
                    <hr className='line-left' />
                    <img src={logo} />
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