import React from 'react'
import join_us from '../../assets/images/join_us.png'
function JoinUs({ joinSection }) {
  return (
    <div ref={joinSection} className='light-theme'>
      <div className='content'>
        <div className='flex flex-col py-5 pt-44 lg:py-0 gap-10 lg:gap-0 lg:flex-row justify-evenly'>
          <div className='flex flex-col justify-center w-[95%] lg:w-[60%]'>
            <h1 className='title'>JOIN TODAY</h1>
            <p className='sub_title'>Scale your estate agency operations using cutting-edge AI technology.</p>
            <p className='sub_title !mt-0'>Join today & experience the difference yourself!</p>
          </div>
          <div className='w-3/4 lg:w-1/3 m-auto '>
            <img src={join_us} className='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs