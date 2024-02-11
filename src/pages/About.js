import React from 'react'
import about from '../assets/images/about.webp'
import Header from '../components/layout/Header'
import SocialMedia from '../components/layout/SocialMedia'
function About() {
    return (
        <div className='dark-theme min-h-screen max-h-full  w-full lg:fixed'>
            <Header />
            <div className='flex content'>
                <div className='flex flex-col py-5 lg:py-0 gap-10 lg:gap-0 lg:flex-row justify-evenly mx-auto w-[90%] xl:w-3/4'>
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
            <SocialMedia />
        </div>
    )
}

export default About