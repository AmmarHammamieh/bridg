import React from 'react'
import join_us from '../../assets/images/join_us.png'
function JoinUs({ joinSection }) {
  return (
    <div ref={joinSection} id="contact_us" className='light-theme'>
      <div className='content'>
        <div className='flex text-center lg:text-start w-[90%] m-auto flex-col py-5 pt-40 lg:py-0 gap-10 lg:gap-0 lg:flex-row justify-evenly'>
          <div className='flex flex-col justify-center w-[95%] lg:w-[55%]'>
            <h1 className='title' data-aos="flip-down">JOIN TODAY</h1>
            <p className='sub_title' data-aos="fade-right">Scale your estate agency operations using cutting-edge AI technology.</p>
            <p className='sub_title !mt-0 lg:w-3/4' data-aos="fade-right">Join today & experience the difference yourself!</p>
          </div>
          <div className=' lg:w-[45%] m-auto '>
            <img src={join_us} className='' data-aos="fade-left" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs