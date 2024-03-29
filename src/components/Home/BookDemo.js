import React from 'react'

function BookDemo({ demoSection }) {

    return (
        <div ref={demoSection} className='light-theme'>
            <div className='content'>
                <div className='flex flex-col w-[91%]  py-5 pt-40 lg:pt-0 lg:pb-0 gap-10 lg:gap-0 m-auto'>
                    <div className='flex flex-col justify-center  text-center'>
                        <h1 className='title' data-aos="flip-down">HOW BRIDGE WORKS</h1>
                        <p className='sub_title w-[85%] lg:w-[67%] mx-auto !mt-5' data-aos="fade-in">Our AI system contacts, qualifies, and schedules applicants for you. You get a list of qualified applicants and their appointments on your CRM diary every morning</p>
                    </div>
                    <div className='flex flex-col w-3/4 lg:w-1/3 m-auto gap-2 lg:mt-10'>
                        <div className="demo field"  data-aos="zoom-in-down">
                            <label>
                                <input
                                    type='text'
                                    className='input'
                                    placeholder='jhon@example.com'
                                />
                                <span className='input-text'>Your Email Address</span>
                            </label>
                        </div>
                        <button className='btn mt-2 !px-5 ' data-aos="zoom-in-down">BOOK A DEMO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDemo