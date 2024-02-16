import React from 'react'
import about from '../../assets/images/about.webp'

function About() {
    return (
        <div className='content'>
            <div className='flex flex-col py-5 lg:py-0 gap-10 lg:gap-0 lg:flex-row justify-evenly'>
                <div className='flex flex-col justify-center w-[95%] lg:w-1/2'>
                    <h1 className='title'>About Us</h1>
                    <p className='sub_title'>Bridge brings together real-estate industry experience with cutting edge AI technology, solving most occurred problems in estate agencies.</p>
                    <p className='sub_title'>Qualify and book viewings around the clock with Bridge AI.</p>
                </div>
                <div className='lg:w-1/2 m-auto '>
                    <img src={about} className='' />
                </div>
            </div>
        </div>
    )
}

export default About