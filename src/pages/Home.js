import React from 'react'
import Header from '../components/Header'
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import buildings from '../assets/images/buildings.png'
function Home() {
    return (
        <div className='dark-theme lg:h-screen w-full lg:fixed'>
            <Header />
            <div className='flex flex-col lg:flex-row h-[80%] justify-between my-auto w-[80%] mx-auto relative mt-14 lg:-mt-10'>
                <div className='flex flex-col justify-center'>
                    <h1 className='title '>Estate Agency Operations <br />Meets AI</h1>
                    <p className='sub_title'>Smarter Communication, <br />Smoother Property Transactions</p>
                </div>
                <img src={buildings} className='mt-3 lg:ms-auto lg:w-[55%]' />
            </div>
            <ul className="media_container">
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
        </div>
    )
}

export default Home