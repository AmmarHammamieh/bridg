import React from 'react'
import easy_to_use from '../../assets/images/chooseUs/easy_to_use.png'
import rellable from '../../assets/images/chooseUs/rellable.png'
import affordable from '../../assets/images/chooseUs/affordable.png'
function ChooseUs() {
    return (
        <div className='content'>
            <div className='flex flex-col w-[95%] lg:w-[78%]  lg:pt-0 pb-5 lg:pb-0 gap-10 lg:gap-0 m-auto'>
                <div className='flex flex-col justify-center w-[85%] mx-auto  text-center'>
                    <h1 className='title' data-aos="flip-down">WHY CHOOSE BRIDGE ?</h1>
                    <p className='sub_title !text-xl !mt-5' data-aos="fade-out">Bridge is not a generic solution. It is designed to fit your estate agency goals and budget. Here are some of the benefits of choosing Bridge</p>
                </div>
                <div className='grid gap-y-5  mt-8 sm:gap-y-0 grid-cols-3 sm:mt-10'>
                    <div className='m-auto flex flex-col justify-center items-center'>
                        <img src={easy_to_use} className='w-20' data-aos="zoom-in" />
                        <p className='sub_title text-center !mt-2' data-aos="fade-in">Easy to Use</p>
                    </div>
                    <div className='m-auto flex flex-col justify-center items-center'>
                        <img src={rellable} className='w-20' data-aos="zoom-in" />
                        <p className='sub_title text-center !mt-2' data-aos="fade-in">Reliable</p>
                    </div>
                    <div className='m-auto flex flex-col justify-center items-center'>
                        <img src={affordable} className='w-20' data-aos="zoom-in" />
                        <p className='sub_title text-center !mt-2' data-aos="fade-in">Affordable</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs