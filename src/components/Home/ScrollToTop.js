import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

function ScrollToTop() {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <HashLink smooth to='/#intro' className="ml-auto p-1 text-sm rounded-lg bg-active fixed bottom-5 right-5" type="button">
            <FaArrowUp className='text-4xl lg:text-2xl' />
        </HashLink>
    )
}

export default ScrollToTop