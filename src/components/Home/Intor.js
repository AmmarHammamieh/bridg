import React from 'react'
import buildings from '../../assets/images/buildings.png'

function Intor({ introSection }) {
    return (
        <div ref={introSection} id='intro' className='content pt-40 lg:pt-20'>
            <div className=' flex flex-col lg:flex-row justify-evenly lg:m-auto'>
                <div className='flex flex-col justify-center w-[85%] lg:w-auto  mx-auto'>
                    <h1 className='title '>ESTATE AGENCY OPERATIONS <br />MEETS AI</h1>
                    <p className='sub_title'>Smarter Communication, <br />Smoother Property Transactions</p>
                </div>
                <div>
                    <img src={buildings} className='-ml-8 lg:ml-0' />
                </div>
            </div>
        </div>
    )
}

export default Intor