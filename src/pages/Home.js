import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/layout/Header'
import SocialMedia from '../components/layout/SocialMedia';
import About from '../components/Home/About';
import BookDemo from '../components/Home/BookDemo';
import Media from '../components/Home/Media';
import Features from '../components/Home/Features';
import ChooseUs from '../components/Home/ChooseUs';
import JoinUs from '../components/Home/JoinUs';
import ContactUs from '../components/Home/ContactUs';
import Intor from '../components/Home/Intor';
import ScrollToTop from '../components/Home/ScrollToTop';
function Home() {
    const headerRef = useRef(null);
    const demoSection = useRef(null);
    const joinSection = useRef(null);
    const contactSection = useRef(null);
    const aboutSection = useRef(null);
    const featureSection = useRef(null);
    const introSection = useRef(null);
    const [theme, setTheme] = useState("dark-theme");


    useEffect(() => {
        const updateHeaderState = () => {
            if (!headerRef.current || !demoSection.current) return; // Avoid errors if refs not set
            const demoSectionTop = demoSection.current.getBoundingClientRect().top;
            const joinSectionTop = joinSection.current.getBoundingClientRect().top;
            const contactSectionTop = contactSection.current.getBoundingClientRect().top;
            const aboutSectionTop = aboutSection.current.getBoundingClientRect().top;
            const featureSectionTop = featureSection.current.getBoundingClientRect().top;
            const introSectionTop = introSection.current.getBoundingClientRect().top;

            if (window.scrollY < 20) {
                headerRef.current.classList.add("lg:!bg-transparent")
            } else {
                headerRef.current.classList.remove("lg:!bg-transparent")
                if ((demoSectionTop < headerRef.current.getBoundingClientRect().height && Math.abs(demoSectionTop) < Math.abs(demoSection.current.getBoundingClientRect().height - headerRef.current.getBoundingClientRect().height))
                    || (joinSectionTop < headerRef.current.getBoundingClientRect().height && Math.abs(joinSectionTop) < Math.abs(joinSection.current.getBoundingClientRect().height - headerRef.current.getBoundingClientRect().height))
                    || (contactSectionTop < headerRef.current.getBoundingClientRect().height && Math.abs(contactSectionTop) < Math.abs(contactSection.current.getBoundingClientRect().height - headerRef.current.getBoundingClientRect().height))) {
                    setTheme('light-theme')
                } else {
                    setTheme('dark-theme')
                }
                if (aboutSectionTop < 2 && Math.abs(aboutSectionTop) < Math.abs(aboutSection.current.getBoundingClientRect().height - headerRef.current.getBoundingClientRect().height)) {
                    let nav_items = document.getElementsByClassName("nav-item")
                    for (let item of nav_items) {
                        item.classList.remove("active")
                        if (item.name.includes("about")) {
                            item.classList.add("active")
                        }
                        if (item.name.includes("about_mobile")) {
                            item.classList.add("w-full")
                        }
                    }
                }
                if (joinSectionTop < 2 && Math.abs(joinSectionTop) < Math.abs(joinSection.current.getBoundingClientRect().height - headerRef.current.getBoundingClientRect().height)) {
                    let nav_items = document.getElementsByClassName("nav-item")
                    for (let item of nav_items) {
                        item.classList.remove("active")
                        if (item.name.includes("contact")) {
                            item.classList.add("active")
                        }
                        if (item.name.includes("contact_us_mobile")) {
                            item.classList.add("w-full")
                        }
                    }
                }
                if (introSectionTop < 2 && Math.abs(introSectionTop) < Math.abs(introSection.current.getBoundingClientRect().height - headerRef.current.getBoundingClientRect().height)) {
                    let nav_items = document.getElementsByClassName("nav-item")
                    for (let item of nav_items) {
                        item.classList.remove("active")
                        if (item.name.includes("intro")) {
                            item.classList.add("active")
                        }
                        if (item.name.includes("intro_mobile")) {
                            item.classList.add("w-full")
                        }
                    }
                }
                if (featureSectionTop < 2 && Math.abs(featureSectionTop) < Math.abs(featureSection.current.getBoundingClientRect().height - headerRef.current.getBoundingClientRect().height)) {
                    let nav_items = document.getElementsByClassName("nav-item")
                    for (let item of nav_items) {
                        item.classList.remove("active")
                        if (item.name.includes("features")) {
                            item.classList.add("active")
                        }
                        if (item.name.includes("features_mobile")) {
                            item.classList.add("w-full")
                        }
                    }
                }
            }

        };
        window.addEventListener('scroll', updateHeaderState);
        updateHeaderState();
        return () => window.removeEventListener('scroll', updateHeaderState);
    }, []);
    return (
        <div className={`${theme} w-full`}>
            <Header headerRef={headerRef} />
            <Intor introSection={introSection} />
            <About aboutSection={aboutSection} />
            <BookDemo demoSection={demoSection} />
            <Media />
            <Features featureSection={featureSection} />
            <ChooseUs />
            <JoinUs joinSection={joinSection} />
            <ContactUs ContactSection={contactSection} />
            <SocialMedia />
            <ScrollToTop />
        </div>
    )
}

export default Home