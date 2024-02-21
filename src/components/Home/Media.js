import React from 'react'
import video_mobile from '../../assets/images/video_mobile.png'
import video from '../../assets/images/video.png'
function Media() {
    return (
        <div className='relative dark-theme'>
            <picture >
                <source media="(min-width:992px)" srcset={video} />
                <source media="(max-width:991px)" srcset={video_mobile} />
                <img src={video} className='absolute top-0 h-full w-full object-fill max-h-full' />
            </picture>
            <div className='content'>
                <span className='pt-48 lg:pt-44 mx-auto d-flex title z-[1] !text-white'>
                    This Video
                </span>
            </div>
        </div>
    )
}

export default Media