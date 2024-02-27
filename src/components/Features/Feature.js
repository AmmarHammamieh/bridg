import React from 'react'
function Feature({ aos_content, aos_title, aos_pic, img, title, content }) {
    return (
        <div>
            <div>
                <img data-aos={aos_pic} src={img} className='border border-active rounded-3xl m-auto' />
            </div>
            <div className='flex justify-center items-center flex-col'>
                <h2 data-aos={aos_title} className='feature_title text-3xl font-Gilroy-Black text-white my-5 text-center'>{title}</h2>
                <p data-aos={aos_content} className='feature_content font-Gilroy-MediumItalic text-base text-center text-white '>{content}</p>
            </div>
        </div>
    )
}

export default Feature