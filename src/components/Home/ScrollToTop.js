import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { IoMdArrowUp } from "react-icons/io";

function ScrollToTop() {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <HashLink smooth to='/#intro' className="ml-auto p-1 text-sm rounded-lg bg-active fixed bottom-5 right-5" type="button">
            <IoMdArrowUp className='text-4xl lg:text-2xl' />
        </HashLink>
    )
}

export default ScrollToTop