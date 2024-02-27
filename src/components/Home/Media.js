import React from 'react'
import video from '../../assets/video/introduction.mp4'
import ReactPlayer from 'react-player/youtube'
function Media() {
    return (
        <div className='relative dark-theme w-full h-full'>
            {/* <video className='absolute left-0 top-0 right-0 w-full h-full py-5' muted autoPlay loop>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <div className='absolute left-0 top-0 right-0 w-full h-full' data-aos="zoom-in">
                <ReactPlayer width="100%" height="100%" url='https://www.youtube.com/watch?feature=shared&v=D6IR0cye9iU' playing={true} muted loop />
            </div>
            <div className='content !m-0'>
            </div>
        </div>
    )
}

export default Media