import React from 'react'
import video_mobile from '../../assets/images/video_mobile.png'
// import video_img from '../../assets/images/video.png'
import video from '../../assets/video/introduction.mp4'
function Media() {
    return (
        <div className='relative dark-theme w-full h-full'>
            {/* <picture >
                <source media="(min-width:992px)" srcset={video_img} />
                <source media="(max-width:991px)" srcset={video_mobile} />
                <img src={video} className='absolute top-0 h-full w-full object-fill max-h-full' />
            </picture> */}
            <video className='absolute left-0 top-0 right-0 w-full h-full py-5' muted autoPlay loop>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='content !m-0'>
            </div>
        </div>
    )
}

export default Media