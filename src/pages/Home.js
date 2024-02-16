import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/layout/Header'
import buildings from '../assets/images/buildings.png'
import SocialMedia from '../components/layout/SocialMedia';
import About from '../components/Home/About';
import BookDemo from '../components/Home/BookDemo';
import Media from '../components/Home/Media';
import Features from '../components/Home/Features';
import ChooseUs from '../components/Home/ChooseUs';
import JoinUs from '../components/Home/JoinUs';
import ContactUs from '../components/Home/ContactUs';
function Home() {
    const headerRef = useRef(null);
    const demoSection = useRef(null);
    const joinSection = useRef(null);
    const contactSection = useRef(null);
    const [theme, setTheme] = useState("dark-theme");

    useEffect(() => {
        const updateHeaderState = () => {
            if (!headerRef.current || !demoSection.current) return; // Avoid errors if refs not set
            const demoSectionTop = demoSection.current.getBoundingClientRect().top;
            const joinSectionTop = joinSection.current.getBoundingClientRect().top;
            const contactSectionTop = contactSection.current.getBoundingClientRect().top;
            if ((demoSectionTop < 2 && Math.abs(demoSectionTop) < Math.abs(demoSection.current.getBoundingClientRect().height))
                || (joinSectionTop < 2 && Math.abs(joinSectionTop) < Math.abs(joinSection.current.getBoundingClientRect().height))
                || (contactSectionTop < 2 && Math.abs(contactSectionTop) < Math.abs(contactSection.current.getBoundingClientRect().height))) {
                setTheme('light-theme')
            } else {
                setTheme('dark-theme')
            }
        };
        window.addEventListener('scroll', updateHeaderState);
        updateHeaderState();
        return () => window.removeEventListener('scroll', updateHeaderState);
    }, []);
    return (
        <div className={`${theme} w-full`}>
            <Header headerRef={headerRef} />
            <div className='content pt-48 lg:pt-0'>
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
            <About />
            <BookDemo demoSection={demoSection} />
            <Media />
            <Features />
            <ChooseUs />
            <JoinUs joinSection={joinSection} />
            <ContactUs ContactSection={contactSection} />
            <SocialMedia />
        </div>
    )
}

export default Home