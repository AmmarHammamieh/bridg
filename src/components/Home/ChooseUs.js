import React from 'react'
import easy_to_use from '../../assets/images/chooseUs/easy_to_use.png'
import rellable from '../../assets/images/chooseUs/rellable.png'
import affordable from '../../assets/images/chooseUs/affordable.png'
function ChooseUs() {
    return (
        <div className='content'>
            <div className='flex flex-col w-[91%]  pt-40 lg:pt-0 pb-5 lg:pb-0 gap-10 lg:gap-0 m-auto'>
                <div className='flex flex-col justify-center  text-center'>
                    <h1 className='title'>Why Choose Bridge ?</h1>
                    <p className='sub_title !mt-5'>Bridge is not a generic solution. It is designed to fit your estate agency goals and budget. Here are some of the benefits of choosing Bridge</p>
                </div>
                <div className='grid grid-cols-1 gap-y-5  mt-5 sm:gap-y-0 sm:grid-cols-3 sm:mt-10'>
                    <div className='m-auto flex flex-col justify-center items-center'>
                        <img src={easy_to_use} className='w-28' />
                        <p className='sub_title text-center !mt-2'>Easy to Use</p>
                    </div>
                    <div className='m-auto flex flex-col justify-center items-center'>
                        <img src={rellable} className='w-28' />
                        <p className='sub_title text-center !mt-2'>Rellable</p>
                    </div>
                    <div className='m-auto flex flex-col justify-center items-center'>
                        <img src={affordable} className='w-28' />
                        <p className='sub_title text-center !mt-2'>Affordable</p>
                    </div>
                </div>
                {/* <div className='flex flex-col w-3/4 lg:w-1/2 m-auto gap-2 lg:mt-10'>
                    <div className="demo field">
                        <label>
                            <input
                                type='text'
                                className='input'
                                placeholder='jhon@example.com'
                            />
                            <span className='input-text'>Your Email Address</span>
                        </label>
                    </div>
                    <button className='btn'>Book A Demo</button>
                </div> */}
            </div>
        </div>
    )
}

export default ChooseUs