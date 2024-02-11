import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function SocialMedia() {
    return (
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
    )
}

export default SocialMedia