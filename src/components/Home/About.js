import React from 'react'
import about from '../../assets/images/about.webp'

function About({ aboutSection }) {
    return (
        <div ref={aboutSection} id='about' className='content'>
            <div className='flex flex-col pb-20  gap-10 pt-40 lg:pt-20 lg:gap-0 lg:flex-row justify-evenly'>
                <div className='flex flex-col justify-center mx-auto w-[85%] lg:w-[38%]'>
                    <h1 className='title'>ABOUT US</h1>
                    <p className='sub_title '>Bridge brings together real-estate
                        industry experience with cutting edge AI
                        technology, solving most occurred
                        problems in estate agencies.</p>
                    <p className='sub_title'>Qualify and book viewings around the clock with Bridge AI.</p>
                </div>
                <div className='lg:w-[62%] ms-auto '>
                    <img src={about} className='-ml-8 lg:ml-0' />
                </div>
            </div>
        </div>
    )
}

export default About