'use client';

import { useState, useEffect } from 'react';
import styles from './header.module.css';
// import Hamburger from './hamburger';

export default function Header() {
    const [navOpen, setNavOpen] = useState(true);
    const [isDarkSection, setIsDarkSection] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            const projectsSection = document.getElementById('projects');
            const headerHeight = 64;

            const isSectionDark = (section) => {
                if (!section) return false;
                const rect = section.getBoundingClientRect();
                return rect.top <= headerHeight && rect.bottom >= 50;
            };

            if (isSectionDark(aboutSection) || isSectionDark(projectsSection)) {
                setIsDarkSection(true);
            } else {
                setIsDarkSection(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <header className={`fixed top-2.5 left-[51vw] px-10 -translate-x-1/2 w-[80%] border-round border-solid z-50 bg-white/20 py-2 mt-0 shadow-sm backdrop-blur-sm shadow-lg backdrop-saturate-150 transition-colors duration-300 rounded-4xl ${isDarkSection ? 'text-white' : 'text-slate-900'}`}>
    <div className="p-3 flex justify-between items-center max-w-7xl mx-auto">
                <div className="text-2xl align-right">
                    <a href="#"><span className="hover:text-emerald-400 transition-colors duration-150 ease-in-out font-medium">QUAM B</span></a>
                </div>

                <nav className={`${styles.navbar} ${navOpen ? styles.open : ''}`}>
                    <div className="flex space-x-2 text-2xl py-1 px-0 rounded-[0.25rem]">
                        <ul className={`flex lg:flex text-base md:text-xl lg:text-lg sm:text-sm/6 gap-5 lg:gap-12`}>
                            <li><a href="/#about"><span className="hover:text-emerald-400">About</span></a></li>
                            <li><a href="/#projects"><span className=" hover:text-emerald-400">Projects</span></a></li>
                            <li><a href="/#contact"><span className=" hover:text-emerald-400">Contact</span></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
