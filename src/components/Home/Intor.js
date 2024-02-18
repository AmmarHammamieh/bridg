import React from 'react'
import buildings from '../../assets/images/buildings.png'

function Intor({ introSection }) {
    return (
        <div ref={introSection} id='intro' className='content pt-48 lg:pt-0'>
            <div className='flex flex-col lg:flex-row justify-evenly m-auto'>
                <div className='flex flex-col justify-center'>
                    <h1 className='title '>Estate Agency Operations <br />Meets AI</h1>
                    <p className='sub_title'>Smarter Communication, <br />Smoother Property Transactions</p>
                </div>
                <div>
                    <img src={buildings} className='' />
                </div>
            </div>
        </div>
    )
}

export default Intor