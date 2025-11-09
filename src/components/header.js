'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './header.module.css';
// import Hamburger from './hamburger';

export default function Header() {
    const [navOpen, setNavOpen] = useState(true);
    const [isDarkSection, setIsDarkSection] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                const headerHeight = 64;
                if (rect.top <= headerHeight && rect.bottom >= 50) {
                    setIsDarkSection(true);
                } else {
                    setIsDarkSection(false);
                }
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
    <header className={`fixed top-0 left-0 w-full border-round border-solid z-50 bg-white/20 py-3 mt-0 shadow-sm backdrop-blur-sm shadow-lg backdrop-saturate-150 transition-colors duration-300 rounded-b-3xl ${isDarkSection ? 'text-white' : 'text-black'}`}>
    <div className="p-3 flex justify-between items-center max-w-7xl mx-auto">
                <div className="text-xl align-right"><Link href="/"><span className="hover:text-green-400 transition-colors duration-150 ease-in-out">QUAM B</span></Link></div>

                <nav className={`${styles.navbar} ${navOpen ? styles.open : ''}`}>
                    <div className="flex space-x-2 text-2xl py-1 px-0 rounded-[0.25rem]">
                        <ul className={`flex lg:flex text-base lg:text-lg sm:text-sm/6 gap-3 lg:gap-10`}>
                            <li><Link href="/#about"><span className="hover:text-green-400">About</span></Link></li>
                            <li><Link href="/"><span className="hover:text-green-400">Projects</span></Link></li>
                            <li><Link href="/"><span className="hover:text-green-400">Contact</span></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
