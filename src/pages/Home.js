import React from 'react'
import Header from '../components/layout/Header'
import buildings from '../assets/images/buildings.png'
import SocialMedia from '../components/layout/SocialMedia';
function Home() {
    return (
        <div className='dark-theme min-h-screen max-h-full  w-full lg:fixed'>
            <Header />
            <div className='flex content lg:-mt-10'>
                <div className='flex flex-col lg:flex-row justify-evenly mx-auto w-[90%] xl:w-3/4'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='title '>Estate Agency Operations <br />Meets AI</h1>
                        <p className='sub_title'>Smarter Communication, <br />Smoother Property Transactions</p>
                    </div>
                    <img src={buildings} className='lg:w-7/12' />
                </div>
            </div>
            <SocialMedia />
        </div>
    )
}

export default Home